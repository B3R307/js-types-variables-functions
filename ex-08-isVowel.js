/**
 * isVowel()
 * ------------------------------------------------------
 * Write a function called isVowel() that returns true/false for
 * whether a character is a vowel or not.
 *
 **/

function isVowel(wrd){
  var resultado = true

   if (wrd === 'a'){
     console.log(resultado);
     return resultado

   } else if (wrd === 'e'){
       console.log(resultado);
       return resultado
   } else if (wrd === 'i'){
       console.log(resultado);
       return resultado
   } else if (wrd === 'o'){
       console.log(resultado);
       return resultado
   } else if (wrd === 'u'){
       console.log(resultado);
       return resultado
  }  else if (wrd === 'y'){
       console.log(resultado);
       return resultado
  }  else if (wrd === 'A'){
       console.log(resultado);
       return resultado
  }  else if (wrd === 'O'){
       console.log(resultado);
       return resultado
     }
    else {
      console.log(false);
      return false
    }
  }

 //*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~

console.assert(isVowel('x') === false);
console.assert(isVowel('e') === true);
console.assert(isVowel('o') === true);
console.assert(isVowel('n') === false);
console.assert(isVowel('L') === false);
console.assert(isVowel('A') === true);
console.assert(isVowel('O') === true);
console.assert(isVowel('y') === true);
  //(of course, 'y' is a vowel!!)
