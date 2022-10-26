function countSwaps(a) {
  let isSwapt = false
  let count=0
  for (let i = 0; i <= a.length; i++) {
    isSwapt = false
    for (let j = 0; j <= a.length; j++) {
      if (a[j] > a[j + 1]) {
        let temp = a[j]
        a[j] = a[j + 1]
        a[j + 1] = temp
        isSwapt = true
        count++
      }
    }
    if (!isSwapt) continue

  }
    console.log(`Array is sorted in ${count} swaps.\nFirst Element: ${a[0]}\nLast Element: ${a[a.length-1]}`)

  
        

}
