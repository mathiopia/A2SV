var maxArea = function(height) {
    let max=0
    let pointerA=0
    let pointerB=height.length-1
    while(pointerA<pointerB){
        if(height[pointerA]>height[pointerB]){
            let newArea=height[pointerB]*(pointerB-pointerA)
            max=Math.max(max,newArea)
            pointerB--
        }
        else{
            let newArea=height[pointerA]*(pointerB-pointerA)
            max=Math.max(max,newArea)
            pointerA++
            
        }
        
    }
    return max
    
};
