var isPowerOfFour = function(n) {
    if(n==1)return true
    else if (n<1)return false
    else return isPowerOfFour(n/4)
    
};
