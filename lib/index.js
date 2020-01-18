'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var rename = _interopDefault(require('rename'));
var ts = require('typescript');

/**
 * @todo Add a way to get the content of the tsconfig.json (or any custom named typescript configuration file) to be "spread" added to the options object.
 * @todo Once @fang/core add the source file path, use it to honor the declaration file generation option (using the snippet in the see section).
 * @see https://github.com/microsoft/TypeScript/wiki/Using-the-Compiler-API#a-minimal-compiler An inspiration code to generate a declaration file.
 */
var index = (function (options) { return function (files) {
    return files.map(function (file) {
        file.content = Buffer.from(ts.transpile(file.content.toString(), options));
        file.path = rename(file.path, {
            extname: ".js",
        }).toString();
        return file;
    });
}; });

module.exports = index;
