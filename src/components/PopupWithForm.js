import React from "react";

function PopupWithForm({
  isOpen,
  name,
  title,
  buttonTitle,
  onClose,
  children,
  onSubmit,
}) {
  const [buttonText, setButtonText] = React.useState(buttonTitle);

  return (
    <>
      {/* Если isOpen true добавляем popup_opened tag */}
      <div
        className={`popup popup_type_${name} ${isOpen ? "popup_opened" : ""}`}
      >
        <div className="popup__container">
          <form
            className={`popup__content popup__content_type_${name}`}
            name={name}
            onSubmit={onSubmit}
          >
            <button
              className="popup__close-button animate-link animate-link_deeper"
              type="button"
              aria-label="Закрыть"
              onClick={onClose}
            ></button>
            <h2 className="popup__title">{title}</h2>

            {children}

            <button
              className="popup__button popup__save-button"
              type="submit"
              onClick={() => {
                setButtonText("Отправляем...");
                setTimeout(() => {
                  setButtonText(buttonTitle);
                }, 2000);
              }}
            >
              {buttonText}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default PopupWithForm;
