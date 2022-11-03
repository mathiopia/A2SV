var isPowerOfThree = function(n) {
    if(n<1)return false
    // 3486784401 is 3^20 
    else if(3486784401%n==0 || n==1)return true
    else return false
};
