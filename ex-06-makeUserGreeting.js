/**
 * makeUserGreeting()
 * ------------------------------------------------------
 * Write a function called makeUserGreeting() that takes
 * (1) a string and (2) a boolean as arguments.
 *
 * The string-argument will be a username and the boolean-argument
 * will signify a true/false value for a returning customer.
 *
 * If the 2nd input is the boolean value `true`,
 * then the function should return a 'Good to see you again, «username».' greeting
 *    Ex: makeUserGreeting('Janet', true) //=> "Good to see you again, Janet."
 *
 * If the 2nd input is the boolean value `false`,
 * then the function should return a 'Welcome, «username»!' greeting
 *    Ex: makeUserGreeting('Janet', false) //=> "Welcome, Janet!"
 *
 * NOTE: Don't forget the comma and space and ending puctuation when building the string.
 **/

function makeUserGreeting(user, cust){
  // var greet = ""

if(cust === true){
  greet = "Good to see you again, " + user + "."
  // console.log("Good to see you again, " + user + '.');
  return greet
  }
   else{
        greet = "Welcome, "+ user + "!"
       // console.log("Welcome, "+ user + "!");
       return greet
  }

}


//
// function makeUserGreeting(username, boolean){
//     var greeting = ''
//
//   console.log(username);
//   console.log(boolean);
//
// if (boolean == true){
//    greeting = 'Good to see you again, ' + username + '.'
//    console.log('Good to see you again, ' + username + '.');
//    return greeting
//
// } else {
//     greeting = 'Welcome, ' + username + '!';
//     console.log('Welcome, ' + username + '!');
//     return greeting
//  }
// }
//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*
var funcOutput1 = makeUserGreeting("Atushi", true)
console.assert( funcOutput1  === "Good to see you again, Atushi." );

var funcOutput2 = makeUserGreeting("Mira", false)
console.assert( funcOutput2 === "Welcome, Mira!");

var funcOutput3 = makeUserGreeting("Nico", false)
console.assert(funcOutput3 !== "Good to see you again, Nico.");
