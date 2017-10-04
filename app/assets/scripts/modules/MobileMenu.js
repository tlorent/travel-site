import $ from 'jquery';

class MobileMenu {

  /* This function will run immediately when
  a new object is created with the class MobileMenu */
  constructor() {
    this.siteHeader = $(".site-header");
    this.menuIcon = $(".site-header__menu-icon");
    this.menuContent = $(".site-header__menu-content");
    this.events();
  }

  // Specify which events to watch for in this method
  events() {
    this.menuIcon.click(this.toggleTheMenu.bind(this));
    // When the menuIcon is clicked, call the toggleMenu method

    // the this in bind refers to the this of the events method, which
    // is the MobileMenu class
    // so now the this in toggleTheMenu refers to the this.menuContent
    // in the constructor function
  }

  toggleTheMenu() {
    this.menuContent.toggleClass("site-header__menu-content--is-visible");
    this.siteHeader.toggleClass("site-header--is-expanded");
    this.menuIcon.toggleClass("site-header__menu-icon--close-x")
  }
}

export default MobileMenu;
