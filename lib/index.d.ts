import { IFile } from "@fang/core/lib/interface";
import { CompilerOptions } from "typescript";
declare const _default: (options: CompilerOptions) => (files: IFile[]) => IFile[];
/**
 * @todo Add a way to get the content of the tsconfig.json (or any custom named typescript configuration file) to be "spread" added to the options object.
 * @todo Once @fang/core add the source file path, use it to honor the declaration file generation option (using the snippet in the see section).
 * @see https://github.com/microsoft/TypeScript/wiki/Using-the-Compiler-API#a-minimal-compiler An inspiration code to generate a declaration file.
 */
export default _default;
