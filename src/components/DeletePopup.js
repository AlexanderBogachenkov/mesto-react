import React from "react";
import PopupWithForm from "./PopupWithForm";

function DeletePlacePopup({ isOpen, onClose }) {
  return (
    <PopupWithForm
      className="popup_delete"
      title="Вы уверены?"
      onClose={onClose}
      isOpen={isOpen}
      nameForm="delete"
      buttonTitle="Да"
    ></PopupWithForm>
  );
}

export default DeletePlacePopup;
