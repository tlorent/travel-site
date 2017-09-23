function Person(fullName, favColor) {
  this.name = fullName;
  this.favColor = favColor;
  this.greet = function() {
    console.log("Hello, my name is " + this.name + " and my favourite colour is " + this.favColor + " .");
  }
}

var john = new Person("John Doe", "blue");
john.greet();

var jane = new Person("Jane Smith", "orange");
jane.greet();
