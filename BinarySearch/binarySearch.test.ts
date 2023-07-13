import binarySearch from "./binarySearch"; // Assuming binarySearch is exported from binarySearch.ts

describe("binarySearch", () => {
  it("returns the index of the target if it exists in the array", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 3)).toBe(2);
    expect(binarySearch([1, 3, 5, 7, 9, 11, 13], 1)).toBe(0);
    expect(binarySearch([2, 4, 6, 8, 10, 12, 14], 14)).toBe(6);
    expect(binarySearch([1, 3, 5], 5)).toBe(2);
    expect(binarySearch([-5, -3, -1, 1, 3, 5], -1)).toBe(2);
  });

  it("returns -1 if the target does not exist in the array", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 6)).toBe(-1);
    expect(binarySearch([1, 3, 5, 7, 9, 11, 13], 0)).toBe(-1);
    expect(binarySearch([2, 4, 6, 8, 10, 12, 14], 15)).toBe(-1);
    expect(binarySearch([1, 3, 5], 2)).toBe(-1);
    expect(binarySearch([-5, -3, -1, 1, 3, 5], 4)).toBe(-1);
  });

  it("returns -1 for an empty array", () => {
    expect(binarySearch([], 1)).toBe(-1);
  });

  it("works with array of one element", () => {
    expect(binarySearch([1], 1)).toBe(0);
    expect(binarySearch([1], 2)).toBe(-1);
  });
});
