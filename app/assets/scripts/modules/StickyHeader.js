import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
  constructor() {
    // Grab any elements with a class of site-header
    // and create a collection in this.siteHeader
    this.siteHeader = $(".site-header");

    this.headerTriggerElement = $(".large-hero__title");
    this.createHeaderWaypoint();
    this.pageSections = $(".page-section");
    // Target any links within the primary nav and save them in headerLinks
    this.headerLinks = $(".primary-nav a");
    this.createPageSectionWaypoints();
    this.addSmoothScrolling();
  }

  addSmoothScrolling() {
    this.headerLinks.smoothScroll();
  }

  createHeaderWaypoint() {

    // Ensure that within the Waypoint class, this still refers to the StickyHeader class
    var that = this;

    // Create a new instance of the Waypoint class
    new Waypoint({
      element: this.headerTriggerElement[0],
      handler: function(direction) {
        if (direction == "down") {
          that.siteHeader.addClass("site-header--dark");
        } else {
          that.siteHeader.removeClass("site-header--dark");
          that.headerLinks.removeClass("is-current-link");
        }
      }
    });
  }

  createPageSectionWaypoints() {

    var that = this;

    // Within the each method, jQuery sets the this keyword to point towards the DOM element from the collection that is currently being looped to
    this.pageSections.each(function() {

      var currentPageSection = this;

      new Waypoint({
        element: currentPageSection,
        handler: function(direction) {
          if(direction == "down") {
            // Goal: Extract and use the custom data attribute in the HTML as a jQuery selector to target the matching header link to be able to give it a modifier class
            // The new variable matchingHeaderLink shoud equal the string value of the HTML attribute
            var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");

            // Remove the is-current-link CSS modified class so that at first nothing is higlighted
            that.headerLinks.removeClass("is-current-link");
            // Now use the variable as a jQuery selector
            // For example, when the #features-link is looped through, that is what the var matchingHeaderLink will be
            $(matchingHeaderLink).addClass("is-current-link");
          }
        },
        // Trigger a waypoint when the top of a page section is 18% from the top of the screen
        offset: "18%"
      });

      new Waypoint({
        element: currentPageSection,
        handler: function(direction) {
          if(direction == "up") {
            var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
            that.headerLinks.removeClass("is-current-link");
            $(matchingHeaderLink).addClass("is-current-link");
          }
        },
        offset: "-40%"
      });
    });
  }
}

export default StickyHeader;
