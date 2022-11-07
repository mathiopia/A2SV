const numRescueBoats = function(people, limit) {
    let pointerA=0
    let pointerB=people.length-1
    let numBoats=0
    people.sort((a,b)=>a-b)
    while(pointerA<=pointerB){
        if(people[pointerA]+people[pointerB]<=limit){
            pointerA++
            pointerB--
        }
        else pointerB--
        numBoats++
    }
    return numBoats
    
    
};
