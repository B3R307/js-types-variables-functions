/**
 * makeGreeting()
 * ------------------------------------------------------
 * Write a function called makeGreeting() that accepts a string username
 * returns a string value that greets the user.
 *
 *
 **/


function makeGreeting(strUser){
  // var greet = ''

  greet = ('Hello ' + strUser)
  // console.log(greet);
  return greet
}



// function makeGreeting(username){
//   var hola = '';
//
//   hola = ('Hello ' + username);
//   console.log(hola)
//   return hola
// }




//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*

var funcOutput1 = makeGreeting("Atushi")
console.assert(funcOutput1  === "Hello Atushi");

var funcOutput2 = makeGreeting("Mira")
console.assert(funcOutput2 === "Hello Mira");

var funcOutput3 = makeGreeting("Nico")
console.assert(funcOutput3 === "Hello Nico");
