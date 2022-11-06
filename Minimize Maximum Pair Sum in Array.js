
const minPairSum = nums=> {
    nums.sort((a,b)=>a-b)
    let max=-1*Infinity
    let j=nums.length-1
    for(let i=0;i<=nums.length ,j>=0;i++,j--){
        sum=nums[i]+nums[j]
        if(sum>max)max=sum
    }
    return max
 
}
