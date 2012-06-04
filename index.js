/*jshint node:true globalstrict:true*/
"use strict";
var fs = require('fs'),
    url = require('url'),
    _ = require('underscore');

module.exports = {
    contains: function(name) {
        return (process.env[name] !== undefined);
    },
    inherit: function(filename) {
        try {
            var env = fs.readFileSync(filename, "utf8");

            env.split("\n").forEach(function(line) {
                var parts = line.split("=");

                // override environment vars with test.env
                if (parts.length == 2 &&
                    !parts[0].match(/^#/) &&
                    process.env[parts[0]] === undefined) {
                    process.env[parts[0]] = parts[1];
                }
            });
        } catch (e) {
            console.warn(filename + " is absent; your environment may be incomplete.");
        }
    },
    require: function(name) {
        if (!this.contains(name)) {
            throw new Error("process.env." + name + " is undefined");
        }

        return process.env[name];
    },
    requireUrl: function(name) {
        var option = url.parse(this.require(name));
        return _.extend(option, {
            port: parseInt(option.port,10),
            user: option.auth && option.auth.split(":")[0],
            pass: option.auth && option.auth.split(":")[1]
        });
    }
};