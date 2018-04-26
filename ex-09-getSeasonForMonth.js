/**
 * getSeasonForMonth()
 * ------------------------------------------------------
 * Write a function called getSeasonForMonth() that accepts
 * an integer as an argument and returns the season of year.
 *   e.g. getSeasonForMonth(6) => 'summer'
 *
 * The function should be built to ONLY accept integer values
 * of 1-12.
 *
 * It the user should also return a boolean value of `false``
 * if the function is given a number less than 1, greater than 12,
 * or a non-number data type.
 *
 **/

 var season1 = "winter";
 var season2 = "spring";
 var season3 = "summer";
 var season4 = "fall";


function getSeasonForMonth (number){
if (number === 1 || number === 12){
     console.log(number, season1);
     return season1
} else if (number === 3){
     console.log(number, season2);
     return season2
} else if (number === 5){
     console.log(number, season2);
     return season2
} else if (number === 7){
    console.log(number, season3);
    return season3
} else if (number === 9){
    console.log(number, season4);
    return season4
  }

    if (number <= 0 || number > 12){
      console.log(number)
      return false
    }
}


//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*

console.assert( getSeasonForMonth(1) === "winter")
console.assert( getSeasonForMonth(3) === "spring")
console.assert( getSeasonForMonth(5) === "spring")
console.assert( getSeasonForMonth(7) === "summer")
console.assert( getSeasonForMonth(9) === "fall")
console.assert( getSeasonForMonth(12) === "winter")

console.assert( getSeasonForMonth(13) === false)
console.assert( getSeasonForMonth(32) === false)
console.assert( getSeasonForMonth(0) === false)
console.assert( getSeasonForMonth() === false)
console.assert( getSeasonForMonth("June") === false)
