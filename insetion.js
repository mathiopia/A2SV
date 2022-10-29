function insertionSort(n, arr) {
  let count=0
  for (let i = 1; i < n; i++) {
    let current = arr[i]
    let j 
    for (j=i-1;(j > -1) && (current < arr[j]);j--) {
      arr[j + 1] = arr[j]
      count++
    }
    
    arr[j + 1] = current
  }
  console.log(arr)
}
