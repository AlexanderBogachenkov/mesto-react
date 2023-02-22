import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({ isOpen, onClose }) {
  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      name="profile-form"
      title="Редактировать профиль"
      buttonTitle="Сохранить"
    >
      <input
        placeholder="Отредактируй имя"
        name="profileName"
        id="profail-name"
        className="popup__profile popup__profile_type_name popup__input"
        type="text"
        minLength="2"
        maxLength="40"
        required
      />
      <span id="profail-name-error" className="popup__error"></span>
      <input
        placeholder="Отредактируй описание"
        name="popup__profileDescription_form"
        id="profail-description"
        className="popup__profile popup__profile_type_description popup__input"
        type="text"
        minLength="2"
        maxLength="200"
        required
      />
      <span id="profail-description-error" className="popup__error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
