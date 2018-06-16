'use strict';
var counter = 0;
var greetThrice = function(names){
  console.log(`Hi ${names[counter]}`)
  counter++
  if (counter === 3 ) return "\n==Done greeting today==";
  return greetThrice(names);

}

console.log(greetThrice(["Christine", "Ritah", "Nagadya", "Another", "One"]));