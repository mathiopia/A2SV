let kClosest = function(points, k) {
    const output=[]

    const distance=points.map((item)=>{
        let x=item[0]
        let y=item[1]
        return (x**2 +y**2)
        
    })
    let sorted=distance.sort((a,b)=>{return a-b})
    let kthNum=sorted[k-1]
    
    points.forEach((item,index)=>{
        let x1=item[0]
        let y1=item[1]
        const d=x1**2 +y1**2
        
        if(d<=kthNum)output.push(points[index])
    })
    return output
};
