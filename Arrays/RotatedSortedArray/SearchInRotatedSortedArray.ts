function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = Math.floor(left + (right - left) / 2);
    let comparator = nums[mid];
    if (target > nums[0] === nums[mid] > nums[0]) {
    } else {
      if (target > nums[mid]) {
        comparator = Infinity;
      } else comparator = -Infinity;
    }
    if (target === comparator) return mid;
    if (target > comparator) left = mid + 1;
    if (target < comparator) right = mid - 1;
  }
  return -1;
}
