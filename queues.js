// Like stacks but FIFO
var Queue = function(){
  this.storage = {};
  this.index   = 0;
  this.first = 0;

}

Queue.prototype.enqueue = function(value){
  this.storage[++this.index] = value;
  console.log(this.storage);
}

Queue.prototype.dequeue = function(){
  delete this.storage[++this.first];
  console.log(this.storage);

}

Queue.prototype.size= function(){

}

var myWeeklyMenu = new Queue();

myWeeklyMenu.enqueue("Fries");
myWeeklyMenu.enqueue("Tea");
myWeeklyMenu.enqueue("chicken");
myWeeklyMenu.dequeue();
myWeeklyMenu.dequeue();