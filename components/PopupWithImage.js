import  Popup  from "./Popup.js";
export default class PopupWithImage extends Popup {
    constructor(popupSelector){
        super(popupSelector)
    }
    open (data){
        super.open();
        const placeImage = this._querySelector("popup-image");
        const placeName = this._querySelector("popup__title");
        placeImage.scr = data.link;
        placeName.textContent = data.name;
        placeImage.alt = data.name;

    }
}
