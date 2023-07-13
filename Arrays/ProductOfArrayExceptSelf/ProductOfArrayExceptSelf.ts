export function productExceptSelf(nums: number[]): number[] {
  const numsArrLength = nums.length;
  const answer: number[] = [];
  let leftProduct;
  let rightProduct;
  const productsFromRight: number[] = [];
  const productsFromLeft: number[] = [];

  productsFromLeft[0] = 1;
  productsFromRight[numsArrLength - 1] = 1;

  for (let i = 1; i < numsArrLength; i++) {
    leftProduct = nums[i - 1] * productsFromLeft[i - 1];
    productsFromLeft.push(leftProduct);
  }

  for (let i = numsArrLength - 2; i >= 0; i--) {
    rightProduct = nums[i + 1] * productsFromRight[i + 1];
    productsFromRight[i] = rightProduct;
  }

  for (let i = 0; i < numsArrLength; i++) {
    answer.push(productsFromLeft[i] * productsFromRight[i]);
  }

  return answer;
}
