import React from "react";
import { api } from "../utils/Api";
import Card from "./Card";
// import kusto from ".././images/kusto.jpg";

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);

//При каждом рендере
  React.useEffect(() => {

    // Общий промис - получаем данные юзера и карточки сайта
    Promise.all([api.getUserData(), api.getInitialCards()])
      .then(([userServerData, cardsData]) => {
        
        //Если ок, в стейт идут userServerData и cardsData
        setCurrentUser(userServerData);
        setCards(cardsData);
        
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="page__content">
      <section className="profile">
        <button
          className="profile__avatar-button"
          type="button"
          onClick={onEditAvatar}
        >
          <img
            className="profile__picture"
            src={currentUser.avatar}
            alt="Жак-Ив Кусто"
          />
        </button>

        <div className="profile__grid">
          <h1 className="profile__name">{currentUser.name}</h1>
          <button
            type="button"
            className="profile__edit-button animate-link animate-link_deeper"
            onClick={onEditProfile}
          ></button>
          <p className="profile__description">{currentUser.about}</p>
        </div>

        <button
          type="button"
          className="profile__add-button animate-link animate-link_deeper"
          onClick={onAddPlace}
        ></button>
      </section>

      <section className="grids" aria-label="Места мира">
        <ul className="grid">
        
        {/* Вставляем карточки */}
        {cards.map((card) => (
          <Card 
            card={card} key={card._id}
            onCardClick={onCardClick} //пробрасываем selectedCard из App в Card
            />
        ))}

        </ul>
      </section>
    </main>
  );
}

export default Main;
