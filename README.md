# fang-typescript

Transpiles your Typescript files and generates declaration files.

## Summary

- [About](#about)
- [Requirements](#requirements)
- [Installation](#installation)
- [Examples](#examples)
- [Chaneglog](CHANGELOG.md)
- [Known issues](#known-issues)

## About

I created this plugin to compile my Typescript files. This is meant to be an "official" plugin, but feel free to seek for others folks alternatives, there might be some more efficient way or feature full way to compile your `.ts` files.

## Requirements

Having [@fang/core](https://npmjs.com/package/@fang/core) installed in version `0.*`.

## Installation

- Using NPM: `npm install --save-dev @fang/typescript`
- Using Yarn: `yarn add --dev @fang/typescript`

## Examples

- [1. Compile a Typescript code into regular Javascript](#1-compile-a-typescript-code-into-regular-javascript)

### 1. Compile a Typescript code into regular Javascript

Assuming your Typescript file is located at `example/src/index.ts`, and you want to generate a Javascript file at `example/dist/js/index.js`.

For this example, you will need to install `@fang/save` (NPM: `npm install --save-dev @fang/save`, Yarn: `yarn add --dev @fang/save`).

```javascript
const { run } = require("@fang/core");
const save = require("@fang/save");
const typescript = require("@fang/typescript");

const ts = {
  name: "typescript",
  input: "example/src/index.ts",
  tasks: [
    typescript({
      strict: true,
      alwaysStrict: true,
      target: "ES5",
    }),
    save({
      folder: "example/dist/js",
    }),
  ],
};

const main = async () => await run([ts]);

main();
```

## Known issues

- There is not way to get your `tsconfig.json` options. You need to use the options in the task, for the moment.
- The `emitDeclarationOnly: true` and `declaration: true` rules will not be honored, for the moment. This means you can't generate `.d.ts` files using this plugin.
