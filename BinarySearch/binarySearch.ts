// search in a sorted array in O(log n) time
function binarySearch(nums: number[], target: number): number {
  const numsLength = nums.length;

  let low = 0;
  let high = numsLength - 1;

  while (low <= high) {
    const mid = Math.floor(low + (high - low) / 2);
    if (nums[mid] === target) return mid;

    if (target > nums[mid]) low = mid + 1;

    if (target < nums[mid]) high = mid - 1;
  }
  return -1;
}

export default binarySearch;
