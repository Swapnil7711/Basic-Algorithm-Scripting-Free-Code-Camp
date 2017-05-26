/* Return the length of the longest word in the provided sentence.

Your response should be a number. */


function findLongestWord(str) {
  
  str = str.split(' ');
  var newar= str.map(function(val){
    return val.length;
  });
  
//   return Math.max.apply(null, newar);
 
  var j= 0;
  for(var i=0;i<newar.length;i++){
    
    if(j<newar[i]){
        
      j= newar[i];
    }
  }
  
  return j;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
