/**
 * justOneString()
 * ------------------------------------------------------
 * Using logical operators, write a function called `justOneString()`
 * that accepts two arguments and will return true if either input is a string,
 * but returns false if both arguments or neither are strings
 *
 **/

       var number = 0
       var string = ''
       var boolean = true/false


function justOneString (input1, input2){
      var isString = true


      if (input1 === 'string' && input2 === 'string'){
         console.log(isString)
         return true
      }
        else  {
        console.log(false);
        return false
      }

}
//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*

console.assert(justOneString('a', 5) === true)
console.assert(justOneString(6, 'dotron') === true)
console.assert(justOneString('peanut', 'butter') === false)
console.assert(justOneString(8, true) === false)
