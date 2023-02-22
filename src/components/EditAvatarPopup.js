import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({isOpen, onClose}) {
  // console.log(isOpen)
  
  return (

<PopupWithForm 
isOpen={isOpen}
onClose={onClose}
name="avatar-form"
title="Обновить аватар"
buttonTitle="Сохранить"
>
          <input
            className="popup__input popup__input_type_avatar"
            id="avatar-input"
            type="url"
            name="avatar"
            placeholder="Укажите ссылку на аватар"
            required
          />
          <span id="avatar-input-error" className="error popup__error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;