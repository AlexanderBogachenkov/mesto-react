import React from "react";


function ImagePopup({ card, onClose }) {
  // console.log(card)
  return (
    <div className={`popup popup-show-image deeper-background-color ${card && "popup_opened"}`} >
      
      <div className="popup__container">
        <button
          className="popup__close-button popup-show-image__close-button animate-link animate-link_deeper"
          type="button"
          aria-label="Закрыть"
          onClick={onClose}
        ></button>


        
        <img className="popup__image" src={card ? card.link : ""} alt={card ? card.name : ""}/>
        <h4 className="popup__image-name" aria-label="Название места">{card ? card.name : ""}</h4>
      </div>
    </div>
  );
}

export default ImagePopup;
