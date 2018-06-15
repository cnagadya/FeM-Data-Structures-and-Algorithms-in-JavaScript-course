
var Stack = function(){
  this.storage = {};
  this.index   = 0;

}

Stack.prototype.push = function(value){
  this.storage[++this.index] = value;
  console.log(this.storage);
}

Stack.prototype.pop = function(){
  delete this.storage[this.index--];
  console.log(this.storage);

}

Stack.prototype.size= function(){

}

var myWeeklyMenu = new Stack();

myWeeklyMenu.push("Fries");
myWeeklyMenu.push("Tea");
myWeeklyMenu.push("chicken");
myWeeklyMenu.pop();
myWeeklyMenu.pop();