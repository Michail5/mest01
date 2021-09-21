 export default class Popup {
    constructor(popupSelector) {
      this._element = document.querySelector(popupSelector);
    }
  
    open() {
      this._element.classList.add("popup__opened");
      document.addEventListener("keydown", (e) => this._handleEscClose(e));
    }
  
    close() {
      this._element.classList.remove("popup__opened");
      document.removeEventListener("keydown", (e) => this._handleEscClose(e));
    }
  
    _handleEscClose(e) {
      if (e.key === "Escape") {
        this.close();
      }
    }
    setEventListeners() {
        this._element
          .querySelector(".popup__close-button")
          .addEventListener("click", () => {
            this.close();
          });
        this._element.addEventListener("mousedown", (e) => {
          if (e.target !== e.currentTarget) {
            return;
          }
          this.close();
        });
      }
    }