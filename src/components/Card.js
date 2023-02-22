import React from "react";
import ImagePopup from "./ImagePopup";


function Card({ card, onCardClick }) {
  // console.log(card)

  function handleClick() {
    onCardClick(card);
    // console.log(card.name)
    // <ImagePopup card={card} />

  }  

  return (
    
      <li className="grid__element">
        <img alt={card.name} className="grid__image" src={card.link} onClick={handleClick}/>
        <div className="grid__place">
          <h2 className="grid__city">{card.name}</h2>
          <div className="grid__like-box">
            <button type="button" className="grid__heart"></button>
            <p className="grid__like-counter">{card.likes.length}</p>
          </div>
        </div>
        <button type="button" className="grid__delete-button"></button>
      </li>
  

  );
}

export default Card;