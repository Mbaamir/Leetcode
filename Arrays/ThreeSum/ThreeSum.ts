function threeSum(nums: number[]): number[][] {
  const numsLength = nums.length;
  const threeSumResult: number[][] = [];

  for (let i = 0; i < numsLength; i++) {
    for (let j = i + 1; j < numsLength; j++) {
      for (let k = j + 1; k < numsLength; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          const newThreeSumArr = [nums[i], nums[j], nums[k]];
          let isAlreadyInThreeSum = false;

          for (let l = 0; l < threeSumResult.length; l++) {
            const areArrsEqual = areArraysEqual(
              threeSumResult[l],
              newThreeSumArr
            );
            if (areArrsEqual) {
              isAlreadyInThreeSum = true;
              break;
            }
          }

          if (!isAlreadyInThreeSum) {
            threeSumResult.push(newThreeSumArr);
          }
        }
      }
    }
  }
  return threeSumResult;
}

function areArraysEqual<T>(arr1: T[], arr2: T[]): boolean {
  if (arr1.length !== arr2.length) return false;

  const sortedArr1 = arr1.sort();
  const sortedArr2 = arr2.sort();

  for (let i = 0; i < sortedArr1.length; i++) {
    if (sortedArr1[i] !== sortedArr2[i]) return false;
  }
  return true;
}

export default threeSum;
