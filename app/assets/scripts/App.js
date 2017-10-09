import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import $ from 'jquery';
import Modal from './modules/Modal';

var mobileMenu = new MobileMenu();

// Just like when creating a new Person instance,
// you pass two arguments for each RevealOnScroll instance to be created
// First, which element and second which offset

// Now you can determine which element should be revelead on scroll
// by specifying the element and the offset
new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".testimonial"), "60%");
var stickyHeader = new StickyHeader();
var modal = new Modal();



// var $ = require('jquery');
// import Person from './modules/Person';
//
// /*
// The Adult class inherites all the
// properties and methods of the Person class.
// What you include here will be unique to the Adult object.
// */
// class Adult extends Person {
//   payTaxes() {
//     console.log(this.name + " now owes $100 in taxes.");
//   }
// }
//
// var john = new Person("John Doe", "blue");
// john.greet();
//
// var jane = new Adult("Jane Smith", "purple");
// jane.greet();
// jane.payTaxes();
