const { addition } = require("../calc");

describe("AdditionCalc test", () => {
  test("Addition of 4 and 6", () => {
    expect(addition(4, 6)).toBe(10);
  });

  test("Addition of 8 and 2 is 10", () => {
    expect(addition(8, 2)).toBe(10);
  });

  test("Addition of 6 and 4 is 10", () => {
    expect(addition(6, 4)).toBe(10);
  });

  test("Addition of 6 and 6 is 12", () => {
    expect(addition(6, 6)).toBe(12);
  });
});
