
let fizzBuzz = (n)=> {
    const answer=new Array(n).fill(0)
    
    let answer2=answer.map(fizz)
    
    function fizz (item,index) {
        if((index+1)%3 == 0 && (index+1)%5 == 0){
                return "FizzBuzz" }
        else if( (index+1) % 3 == 0 ){
                return "Fizz" }
        else if((index+1) % 5 == 0){
                return "Buzz" }
        else{ return (index+1).toString() }  
                }
   
                  
     return answer2
