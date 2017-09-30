// ES6 version
class Person {
  constructor(fullName, favColor) {

    this.name = fullName;
    this.favColor = favColor;
  }

  greet() {
    console.log("HI, my name is " + this.name + " and my favourite colour is " + this.favColor + " .");
  }
}

export default Person;

// ES5 version //
// function Person(fullName, favColor) {
//   this.name = fullName;
//   this.favColor = favColor;
//   this.greet = function() {
//     console.log("Hello, my name is " + this.name + " and my favourite colour is " + this.favColor + " .");
//   }
// }
//
// module.exports = Person;
