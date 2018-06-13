// opted to go with person instead of building 
function Person(name,gender){
  this.what = "person";
  this.name = name;
  this.gender = gender;
};

Person.prototype.showDetails = function(){
  if (this.gender.toLowerCase() == "female"){
    console.log(`${this.name} is a queen`);
  }
  else if (this.gender.toLowerCase() == "male"){
    console.log(`${this.name} is a king`);
  }
  else {
    console.log(`${this.name} maybe a king or queen`);
  }
};

var Christine= new Person("Christine", "fEMAle");
var Arnold= new Person("Arnold", "MAle");

Christine.showDetails();
Arnold.showDetails();
