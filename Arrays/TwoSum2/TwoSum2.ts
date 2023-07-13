export default function twoSum2(numbers: number[], target: number): number[] {
  const numbersLength = numbers.length;
  let left = 0;
  let right = numbersLength - 1;
  for (let i = 0; i < numbersLength; i++) {
    const sumOfTwo = numbers[left] + numbers[right];
    if (sumOfTwo === target) return [left + 1, right + 1];
    else if (sumOfTwo > target) right--;
    else if (sumOfTwo < target) left++;
  }
  throw "no twoSum found";
}
