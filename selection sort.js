selectionSort(arr,n){
       for(let i = 0; i < n; i++) {
        let index = i;
        for(let j = i+1; j < n; j++){
            if(arr[j] < arr[index]) {
                index=j; 
            }
            
         }
         if (index != i) {
             let tmp = arr[i]; 
             arr[i] = arr[index];
             arr[index] = tmp;      
        }
    }
    return arr;
  }
    
}
