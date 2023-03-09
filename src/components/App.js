import React from "react";
import { api } from "../utils/Api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import ImagePopup from "./ImagePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import EditProfilePopup from "./EditProfilePopup";
import AddPlacePopup from "./AddPlacePopup";
import DeletePopup from "./DeletePopup";

function App() {
  //Начальные стейты
  const [isAvatarPopupOpen, setIsAvatarPopupOpen] = React.useState(false);
  const [isProfilePopupOpen, setIsProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isDeletePlacePopupOpen, setIsDeletePlacePopupOpen] =
    React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);
  // const [cardForDelete, setCardForDelete] = React.useState({});

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

  // console.log(cards);

  //Выбранная карточка
  const [selectedCard, setSelectedCard] = React.useState(null);

  // Обработчики событий //
  function handleEditAvatarClick() {
    setIsAvatarPopupOpen(true);
    EditAvatarPopup(isAvatarPopupOpen);
  }

  // Обработчики кликов на открытие попапов
  function handleEditProfileClick() {
    setIsProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    // console.log(isLiked);
    // Отправляем запрос в API и получаем обновлённые данные карточки

    if (!isLiked)
      api
        .addLikeToCard(card._id)
        .then((newCard) => {
          setCards((state) =>
            state.map((c) => (c._id === card._id ? newCard : c))
          );
        })
        .catch((err) => {
          console.log(err);
        });

    if (isLiked)
      api
        .deleteLikeFromCard(card._id)
        .then((newCard) => {
          setCards((state) =>
            state.map((c) => (c._id === card._id ? newCard : c))
          );
        })
        .catch((err) => {
          console.log(err);
        });
  }

  // function handleDeletePlaceClick(card) {
  //   setIsDeletePlacePopupOpen(true);
  //   setCardForDelete(card);
  //   console.log(cardForDelete._id);
  // }

  function handleCardDelete(card) {
    // e.preventDefault();
    // console.log(cardForDelete._id);
    api
      .deleteCard(card._id)
      .then(() => {
        const newCards = cards.filter((elem) => elem !== card);
        setCards(newCards);
        // closeAllPopups();
      })
      .catch((err) => console.log(err));
  }

  function handleUpdateUser(userData) {
    // console.log(userData);

    api
      .changeUserData(userData)
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  }

  function handleUpdateAvatar(avatar) {
    api
      .changeAvatar(avatar)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((err) => {
        alert(err);
      });
  }

  function handleAddPlaceSubmit(data) {
    console.log("Start add");
    api
      .addCard(data)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
    console.log("End add");
  }

  //Закрываем все окна
  function closeAllPopups() {
    setIsAvatarPopupOpen(false);
    setIsProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
    setIsDeletePlacePopupOpen(false);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onEditAvatar={handleEditAvatarClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick} // пробрасываем selectedCard в Main
          onCardDelete={handleCardDelete}
          onCardLike={handleCardLike}
          cards={cards}
        />

        {/* пробрасываем selectedCard в ImagePopup */}
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />

        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
        />
        <EditProfilePopup
          isOpen={isProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
        <EditAvatarPopup
          isOpen={isAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />

        <DeletePopup
          isOpen={isDeletePlacePopupOpen}
          onClose={closeAllPopups}
          onSubmit={handleCardDelete}
        />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
