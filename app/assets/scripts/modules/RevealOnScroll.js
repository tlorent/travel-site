import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
  // Everything in the constructor function is ran immediately
  // when a new instance of the RevealOnScroll class is created.

  //Add two parements to receive the two incoming arguments from App.js
  constructor(els, offset) {
    // Store the feature items in an itemsToReveal property
    this.itemsToReveal = els;
    this.offsetPercentage = offset;
    this.hideInitially();
    this.createWaypoints();
  }

  hideInitially() {
    this.itemsToReveal.addClass("reveal-item");
  }

  // Add a waypoint object for each element that has the feature-item class
  // (that are in the itemsToReveal "collection" that contains all these elements)
  createWaypoints() {

    // Ensure that the this keyword in the Waypoint object
    // does not point to the indivual waypoint object, but
    // refers to the RevealOnScroll object
    var that = this;

    this.itemsToReveal.each(function(){

      // Ensure that in the waypoint 'this' still refers to
      // each feature-item element
      var currentItem = this;

      // Each waypoint object needs two properties
      new Waypoint({
        // The DOM element that you want to watch for
        element: currentItem,
        // What needs to happen when that element is scrolled to
        handler: function() {
          $(currentItem).addClass("reveal-item--is-visible");
        },
        offset: that.offsetPercentage
      })
    });
  }
}

export default RevealOnScroll;
