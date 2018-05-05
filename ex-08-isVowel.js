/**
 * isVowel()
 * --------s----------------------------------------------
 * Write a function called isVowel() that returns true/false for
 * whether a character is a vowel or not.
 *
 **/
//
function isVowel(vowel){
  // console.log(vowel);
  var vowHere = false
  if( vowel === 'a' || vowel === 'e' || vowel === 'i' || vowel === 'o' || vowel ==='u' || vowel === 'y'){
    return true
  } else if(vowel === 'A' || vowel === 'E' || vowel === 'I' || vowel === 'O' || vowel ==='U' || vowel === 'Y'){
     return true
  }  else{
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
