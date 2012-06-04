Your env variables are dependencies. Treat them as such.

```javascript

var env = require('require-env'),
    foo = env.require('FOO');

```

If there's a FOO variable in your app's environment, ie `process.env.FOO`, then `foo` is set. If not, then an exception is thrown and your app will crash.

This mirrors the behavior of the node.js `require` method which will crash if the given module is not found. This is especially useful on services such as Heroku which store database connection info in environment variables. If you don't have the URL for a database you require, better to crash now than to crash somewhere inside someone else's connect method.

This module also contains some convenience functions for dealing with environment variables in node:

## env.contains(name)

returns true if `process.env[name]` exists and is not `undefined`.

## env.inherit(filename)

Synchronously loads environment variables from the given file and adds them to `process.env`. Useful for running tests with different environment variables. Understands comments (lines beginning with `#`). Does not crash if the file is missing (just prints a warning). Written with [Foreman's](https://github.com/ddollar/foreman) `.env` files in mind.

## env.require(name)

returns the environment variable with the given `name` if it exists and is not `undefined`. Throws an Error if otherwise.

## env.requireUrl(name)

Runs `url.parse` on the variable with the given `name`, parses `user` and `pass` variables from any resulting `auth` info and parses any resulting `port` into an `int`. Written with RedisToGo URLs in mind.
