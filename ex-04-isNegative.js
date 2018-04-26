/**
 * isNegative()
 * ------------------------------------------------------
 * Write a function called isNegative that returns true/false for
 * whether a number is negative or not.
 *
 **/


function isNegative(num1){

    if (num1 < 0){

      console.log("es negativo", num1)
      return true

    } else{
      console.log( "es positivo", num1)

      return false
    }



}



//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*

console.assert( isNegative(100) === false )
console.assert( isNegative(14) === false )
console.assert( isNegative(2) === false )
console.assert( isNegative(0) === false )
console.assert( isNegative(-1) === true )
console.assert( isNegative(-64) === true )
