function Person(fullName, favColor) {
  this.name = fullName;
  this.favColor = favColor;
  this.greet = function() {
    console.log("Hello, my name is " + this.name + " and my favourite colour is " + this.favColor + " .");
  }
}

module.exports = Person;
