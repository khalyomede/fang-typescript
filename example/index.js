const { run } = require("@fang/core");
const save = require("@fang/save");
const typescript = require("../lib");

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
