const dailyTemperatures = function(temperatures) {
    let stack=[]
    let pushed=false
     for(let j=0;j<temperatures.length;j++){
        for(let i=j+1;i<temperatures.length;i++){
            if(temperatures[i]>temperatures[j]){
                stack.push(i-j)
                pushed=true
                break}
        }
        if(!pushed)stack.push(0)
        pushed=false
        
    }
    return stack
    
}
