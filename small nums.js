var smallerNumbersThanCurrent = function(nums) {
   const output=[].fill(0,0,nums.length-1)
    nums.forEach((item,index)=>{
        let count=0
        for(let i=0;i<nums.length;i++){
            if(item>nums[i]) count++
        }
        output[index]=count
        
    }
      )        
    return output
    
};
