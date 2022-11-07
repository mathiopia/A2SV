var moveZeroes = function(nums) {
    let pointerA=0
    let pointerB=1
    while(pointerB<nums.length){
        if(nums[pointerA]!=0){
             pointerA++
             pointerB++
        }
        else if(nums[pointerB]==0){
            pointerB++
}
        else{
            let temp=nums[pointerB]
            nums[pointerB]=nums[pointerA]
            nums[pointerA]=temp
            
        }
        
    }
    return nums

    
};
