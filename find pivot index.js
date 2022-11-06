
var pivotIndex = function(nums) {
   let leftSum = 0
   const totalSum= nums.reduce((acc,curr)=> acc+curr )
   for(let e=0; e<nums.length; e++){
      if(totalSum - leftSum - nums[e] === leftSum)return e;
      leftSum += nums[e]
   }
    return -1
};
