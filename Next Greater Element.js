var nextGreaterElement = function(nums1, nums2) {
    let output=[]
    nums1.forEach((item)=>{
        let nowIndex=nums2.indexOf(item)
        let greater=false
        for(let i=nowIndex+1;i<nums2.length;i++){
            if(item<nums2[i]){
                output.push(nums2[i]) 
                greater=true
                break
            }  
        }
         if(!greater) output.push(-1) 

        
    })
    return output
    
}
