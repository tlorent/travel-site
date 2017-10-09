import $ from 'jquery';

class Modal {

  // Select any DOM elements we need to work with
  constructor() {
    this.openModalButton = $(".open-modal");
    this.modal = $(".modal");
    this.closeModalButton = $(".modal__close");

    // begin listening for events as soon as the page loads
    this.events();
  }

  // List which events need to be watched for
  events() {

    // Use bind. When openModal() and closeModal() are run, the this keyword will no longer point to the main Modal class/object. This means that you can't access the this.modal property anymore, because the two methods are not being run directly but called by the event handlers. By the time the methods actually run, the this keyword has been reset to the element that was just clicked on. With bind, the this keyword still points to the main object/class so you can still access the this.modal/modal property!

    // clicking the open modal button
    this.openModalButton.click(this.openModal.bind(this));

    // clicking the x close modal button
    this.closeModalButton.click(this.closeModal.bind(this));

    // pushes any key
    // keyup fires when the user lets go of the key
    // with $(document) select the whole document/page
    $(document).keyup(this.keyPressHandler.bind(this));
  }

  keyPressHandler(e) {
    if(e.keyCode === 27) {
      this.closeModal();
    }
  }

  openModal() {
    this.modal.addClass("modal--is-visible");
    return false;
  }

  closeModal() {
    this.modal.removeClass("modal--is-visible");
  }
}

export default Modal;
