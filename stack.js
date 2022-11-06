var isValid = function(s) {
  if(s,length==1)return false
  const stack = [];
  const characters = { ')': '(', '}': '{', ']': '['};
  for (const char of s) {
      
    if (!characters[char]){
       stack.push(char); 
    } 
    else if (stack.pop() !== characters[char]){
        return false;
    } 
  }
  return stack.length === 0;
}
