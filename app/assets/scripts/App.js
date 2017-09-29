var $ = require('jquery');
var Person = require('./modules/Person');

alert("hi");

var john = new Person("John Doe", "blue");
john.greet();

var jane = new Person("Jane Smith", "orange");
jane.greet();
