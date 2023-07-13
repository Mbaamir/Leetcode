import twoSum2 from "./TwoSum2";

describe("twoSum2", () => {
  it("returns an tuple containing the index + 1 of the values matching the target ", () => {
    expect(twoSum2([2, 7, 11, 15], 9)).toBe([1, 2]);
  });
});
