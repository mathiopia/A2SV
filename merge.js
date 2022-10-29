 const merge = intervals => {
  if (intervals.length <= 1) return intervals;

  intervals.sort((a, b) => a[0] - b[0]);
  
  const result = [];
  let previous = intervals[0];
    
  intervals.forEach((item,index)=>{
      
    if (previous[1] >= item[0]) {
        maxNum = Math.max(previous[1], item[1])
      previous = [previous[0],maxNum ];
    } else {
      result.push(previous);
      previous = item;
    }
      
  }) 
  result.push(previous);
  
  return result;
};
