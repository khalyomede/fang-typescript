import { expect } from "chai";
import typescript from "../lib";
import { run } from "@fang/core";

describe("yourLib", () => {
	it("should export a function", () =>
		expect(typescript).to.be.instanceOf(Function));
});
