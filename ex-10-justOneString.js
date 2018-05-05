/**
 * justOneString()
 * ------------------------------------------------------
 * Using logical operators, write a function called `justOneString()`
 * that accepts two arguments and will return true if either input is a string,
 * but returns false if both arguments or neither are strings
 *
 **/



function justOneString(input1, input2){
  // console.log(input1);
  // console.log(input2);

  var input1 = typeof input1
  var input2 = typeof input2

  // console.log(input1);
  // console.log(input2);
  var isStr = false

   if (input1 === 'string' && input2 !== 'string'){
         isStr = true
         return isStr
      }
        else if(input1 !== 'string' && input2 === 'string'){
        isStr = true
        return isStr
      } else{
        istr = false
        return isStr
      }

}
//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*

console.assert(justOneString('a', 5) === true)
console.assert(justOneString(6, 'dotron') === true)
console.assert(justOneString('peanut', 'butter') === false)
console.assert(justOneString(8, true) === false)
