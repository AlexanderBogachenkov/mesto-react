import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import EditProfilePopup from "./EditProfilePopup";
import AddPlacePopup from "./AddPlacePopup";

import "../index.css";

function App() {
  const [isAvatarPopupOpen, setIsAvatarPopupOpen] = React.useState(false);
  const [isProfilePopupOpen, setIsProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  // Обработчики событий //
  function handleEditAvatarClick() {
    setIsAvatarPopupOpen(true);
    EditAvatarPopup(isAvatarPopupOpen);
    // console.log('Обработчики событий всех popup')
    // console.log(isAvatarPopupOpen)
    // debugger
  }

  function handleEditProfileClick() {
    setIsProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }


  function closeAllPopups() {
    setIsAvatarPopupOpen(false);
    setIsProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onEditAvatar={handleEditAvatarClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
        
      />
      {/* <PopupWithForm /> */}
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />

      <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />
      <EditProfilePopup isOpen={isProfilePopupOpen} onClose={closeAllPopups} />
      <EditAvatarPopup isOpen={isAvatarPopupOpen} onClose={closeAllPopups} />
      <Footer />


    </div>
  );
}

export default App;
