import { IFile } from "@fang/core/lib/interface";
import rename from "rename";
import { CompilerOptions } from "typescript";
import * as ts from "typescript";

/**
 * @todo Add a way to get the content of the tsconfig.json (or any custom named typescript configuration file) to be "spread" added to the options object.
 * @todo Once @fang/core add the source file path, use it to honor the declaration file generation option (using the snippet in the see section).
 * @see https://github.com/microsoft/TypeScript/wiki/Using-the-Compiler-API#a-minimal-compiler An inspiration code to generate a declaration file.
 */
export default (options: CompilerOptions) => (
	files: Array<IFile>
): Array<IFile> => {
	return files.map(file => {
		file.content = Buffer.from(
			ts.transpile(file.content.toString(), options)
		);
		file.path = rename(file.path, {
			extname: ".js",
		}).toString();

		return file;
	});
};
