import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({isOpen, onClose}) {
  // console.log(isOpen)
  
  return (

<PopupWithForm 
  isOpen={isOpen}
  onClose={onClose}
  name="add-place-form"
  title="Новое место"
  buttonTitle="Создать"
>
  <>
<input
      placeholder="Название"
      name="placeName"
      id="place-name"
      className="popup-add-place__type popup-add-place__type_name popup__input"
      type="text"
      autoComplete="off"
      minLength="2"
      maxLength="30"
      required
    />
    <span id="place-name-error" className="popup__error"></span>
    <input
      placeholder="Ссылка на картинку"
      name="placeUrl"
      id="place-url"
      className="popup-add-place__type popup-add-place__type_src popup__input"
      type="url"
      required
    />
    <span id="place-url-error" className="popup__error"></span>
</>
    </PopupWithForm>
  );
}

export default AddPlacePopup;




