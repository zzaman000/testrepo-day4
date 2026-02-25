const { getMessage } = require("../src/script");

test("returns correct pipeline success message", () => {
  expect(getMessage()).toBe("Pipeline is working!");
});

test("returns custom message when provided", () => {
  expect(getMessage("Hello")).toBe("Hello");
});