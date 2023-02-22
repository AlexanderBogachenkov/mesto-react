import React from "react";

function Card({ card, onCardClick, onDeleteClick }) {
  function handleClick() {
    //пробрасываем selectedCard из App -> Main -> Card
    //по клику меняется isOpen
    onCardClick(card);
  }
  //пробрасываем onDeleteClick из App -> Main -> Card
  //по клику меняется isOpen
  function onDeleteButtonClick() {
    onDeleteClick(card);
  }

  return (
    <li className="grid__element">
      <img
        alt={card.name}
        className="grid__image"
        src={card.link}
        onClick={handleClick}
      />
      <div className="grid__place">
        <h2 className="grid__city">{card.name}</h2>
        <div className="grid__like-box">
          <button type="button" className="grid__heart"></button>
          <p className="grid__like-counter">{card.likes.length}</p>
        </div>
      </div>
      <button
        type="button"
        className="grid__delete-button"
        onClick={onDeleteButtonClick}
      ></button>
    </li>
  );
}

export default Card;
