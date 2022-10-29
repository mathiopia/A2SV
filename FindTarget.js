
let targetIndices = function(nums, target) {
    let sorted =nums.sort((a,b)=>{return a-b})
    let Output=[]
    sorted.forEach((item,index)=>{
        if(item==target) Output.push(index)
        })  
    
   return Output
}
