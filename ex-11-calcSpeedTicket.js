/**
 * calcSpeedTicket()
 * ------------------------------------------------------
 * Write a function that calculates a speeding ticket:
 *
 * The function should take 3 arguments:
 *    (1) the speed limit
 *    (2) the user's reported speed
 *    (3) a boolean value for whether the user was in
 *        a protected area (like a school-zone or work-zone)
 *
 * fine schedule:
 *   less than speed limit             : $0
 *   speeding ticket (< 20mph)         : $150
 *   speeding ticket (>= 20mph)        : $250
 *
 * If the user is in a protected area, the fine doubles.
 *
 * Example
 *  calcSpeedTicket(40, 30, false)
 *    => 0
 *
 *  calcSpeedTicket(20, 30, false)
 *    => 150
 *
 *  calcSpeedTicket(20, 31, true)
 *    => 300
 *
 *  calcSpeedTicket(50, 100, true)
 *    => 500
 *
 **/
function calcSpeedTicket(spLim, usrSpdRep, protectArea){
  var price = 0


if(spLim < usrSpdRep && protectArea === false){
     if(usrSpdRep - spLim < 20){
       price = 150
       console.log(price);
       return price
           } else{
      price = 250
      console.log(price);
      return price
     }


} else if (spLim < usrSpdRep && protectArea === true){
  if(usrSpdRep - spLim < 20){
    price = 300
    console.log(price)
    return price
  }  else{
    price = 500
    console.log(price)
     return price
   }
 }  else{
   price = 0
   console.log(price)
   return price
 }
}
// if(spLim > usrSpdRep && protectArea === false){
//        return 0
//     }
//
//  else if(spLim < usrSpdRep && protectArea === false){
//      return 150
//     }
//  else if(spLim < usrSpdRep && protectArea === true){
//     return 150 * fineDouble
//     }
//  else if(spLim < usrSpdRep && protectArea === true){
//    return 250 * fineDouble
//    }


//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*

console.assert( calcSpeedTicket(25, 40, false) === 150  )
console.assert( calcSpeedTicket(65, 72, true) === 300  )
console.assert( calcSpeedTicket(75, 97, false) === 250 )
console.assert( calcSpeedTicket(55, 83, true) === 500  )
console.assert( calcSpeedTicket(30, 27, true) === 0  )
