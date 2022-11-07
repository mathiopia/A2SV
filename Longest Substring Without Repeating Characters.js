var lengthOfLongestSubstring = function(str) {
    let n = str.length
    let res = 0
     
    for(var i = 0; i < n; i++)
    {
        let visited = new Array(256);
         
        for(var j = i; j < n; j++)
        {   if (visited[str.charCodeAt(j)] == true)
                break

            else
            {
                res = Math.max(res, j - i + 1)
                visited[str.charCodeAt(j)] = true
            }
        }
    }
    return res
    
};
