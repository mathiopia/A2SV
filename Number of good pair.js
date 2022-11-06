
const numIdenticalPairs = nums => {
  let numOfPairs = 0;

  nums.sort();
    
  for (i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        numOfPairs ++;
      } else {
        continue;
      }
    }
  }
  return numOfPairs;
}
