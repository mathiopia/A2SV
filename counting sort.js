
function countingSort(arr) {
    const size=arr.length<101 ? arr.length : 100
    let output=new Array(size).fill(0)
    arr.forEach((item)=>{
        output[item]++
    })  
    return output  

}
