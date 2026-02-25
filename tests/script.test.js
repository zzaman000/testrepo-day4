const { getMessage } = require("../src/script");

test("returns correct pipeline success message", () => {
  expect(getMessage()).toBe("Pipeline is working!");
});