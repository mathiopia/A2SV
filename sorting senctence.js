
var sortSentence = function(words) {
  let pattern=/\d/g
  let index=words.match(pattern)
  if(index==null){return ''}
  let splited= words.split(" ")
  let cpy=[]
  for(let i in splited){
    cpy[index[i]-1]=(splited[i])
  }
  let result=cpy[0].substr(0, cpy[0].length-1)
  for(let i=1; i<cpy.length ;i++ ){
     result+=" "
     let len= cpy[i].length
     let newl=cpy[i].substr(0, len-1)
     result+=newl ;
  }
     return result
           
  
}
