'use strict';
var counter = 0;
var greetThrice = function(name){
  name = name || "Nameless";
  console.log(`Hi ${name}`);
  counter++
  if (counter === 3 ) return "Done greeting";
  return greetThrice("Christine");

}

console.log(greetThrice());