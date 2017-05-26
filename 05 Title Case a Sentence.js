/*Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".*/


function titleCase(str) {
  str = str.toLowerCase();
  var st = str.split(" ");
  
  var newarray = st.map(function(val){
    
        return val.charAt(0).toUpperCase() +val.substr(1).toLowerCase();
  });
  
  return newarray.join(' ');
}

titleCase("I'm a little tea pot");
