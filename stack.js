// Stacks LIFO

var Stack = function(){
  this.storage = "";
}

Stack.prototype.push = function(val){
  this.storage += " " + val.replace(/\s/g, '');
  console.log(this.storage);
};

Stack.prototype.pop = function(){
  //slice of characters until the delimiter
  delimiter = this.storage.lastIndexOf(" ")
  this.storage = this.storage.slice(0, delimiter)
  console.log(this.storage)
};

Stack.prototype.size = function(){
  console.log(this.storage.trim().split(' ').length)

};

var myWeeklyMenu = new Stack();

myWeeklyMenu.push("Frie  s");
myWeeklyMenu.size()
myWeeklyMenu.push("Tea");
myWeeklyMenu.size()
myWeeklyMenu.push("chicken");
myWeeklyMenu.size()
myWeeklyMenu.pop();
myWeeklyMenu.size()