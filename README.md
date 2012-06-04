Your env variables are dependencies. Treat them as such.

# Installation

`npm install require-env --save`

(`--save` automatically updates your package.json file - tell your friends)

# Usage

```javascript

var env = require('require-env'),
    foo = env.require('FOO');

```

If there's a FOO variable in your app's environment, ie `process.env.FOO`, then `foo` is set. If not, then an exception is thrown and your app will crash.

This mirrors the behavior of the node.js `require` method which will crash if the given module is not found. This is especially useful on services such as Heroku which store database connection info in environment variables. If you don't have the URL for a database you require, better to crash now than to crash somewhere inside someone else's connect method.

# API

This module also contains some convenience functions for dealing with environment variables in node:

## env.contains(name)

returns true if `process.env[name]` exists and is not `undefined`.

## env.inherit(filename)

Synchronously loads environment variables of the form `KEY=VALUE` from the given file and adds them to `process.env`. Useful for running tests with different environment variables. Understands comments (lines beginning with `#`). Does not crash if the file is missing (just prints a warning). Written with [Foreman's](https://github.com/ddollar/foreman) `.env` files in mind.

## env.require(name)

returns the environment variable with the given `name` if it exists and is not `undefined`. Throws an Error if otherwise.

## env.requireUrl(name)

Runs `url.parse` on the variable with the given `name`, parses `user` and `pass` variables from any resulting `auth` info and parses any resulting `port` into an `int`. Written with RedisToGo URLs in mind.

# License

(The MIT License)

Copyright (c) 2011-2012 Bloom Studio, Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
