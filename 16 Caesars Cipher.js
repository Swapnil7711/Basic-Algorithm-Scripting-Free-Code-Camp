// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

function rot13(str) { // LBH QVQ VG!
  var a1= [];
  var a2= [];
  a1 = str.split('').map(function(val){
    
        code = val.charCodeAt(0);    
    
        if(code<65 || code>90){
          
          return code;
        }else if(code<78){
          
            return code+13;
          
        }else{
          
          return code-13;
        }
    
    
        
  });
  console.log('code of string'+ a1);
  
  a2 = a1.map(function(val){
    
            return String.fromCharCode(val);
    
  }).join('');  
  return a2;
  
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");