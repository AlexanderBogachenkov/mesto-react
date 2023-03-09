import React, { useCallback, useEffect } from "react";

const KEY_NAME_ESC = "Escape";
const KEY_EVENT_TYPE = "keyup";

function useEscapeKey(handleClose) {
  const handleEscKey = useCallback(
    (event) => {
      if (event.key === KEY_NAME_ESC) {
        handleClose();
      }
    },
    [handleClose]
  );

  useEffect(() => {
    document.addEventListener(KEY_EVENT_TYPE, handleEscKey, false);

    return () => {
      document.removeEventListener(KEY_EVENT_TYPE, handleEscKey, false);
    };
  }, [handleEscKey]);
}

// const MOUSE_UP = "mouseup";
// function useOutsideClick(handleClose, ref) {
//   // console.log(ref.current);

//   const handleClick = useCallback(
//     (event) => {
//       // console.log("event.target -> ", event.target);
//       // console.log("ref.current -> ", ref.current);

//       if (ref?.current?.contains && !ref.current.contains(event.target)) {
//         // if (ref.current !== event.target)
//         handleClose();
//       }
//     },
//     [handleClose, ref]
//   );

//   useEffect(() => {
//     document.addEventListener(MOUSE_UP, handleClick);

//     return () => {
//       document.removeEventListener(MOUSE_UP, handleClick);
//     };
//   }, [handleClick]);
// }

function ImagePopup({ card, onClose }) {
  useEscapeKey(onClose);

  // const ref = React.useRef(null);
  // useOutsideClick(onClose, ref);

  return (
    //Если кард true добавляем popup_opened tag
    <div
      className={`popup popup-show-image deeper-background-color ${
        card && "popup_opened"
      }`}
    >
      <div className="popup__container">
        <button
          className="popup__close-button popup-show-image__close-button animate-link animate-link_deeper"
          type="button"
          aria-label="Закрыть"
          onClick={onClose}
        ></button>

        {/* Если кард true добавляем card.link и card.name */}
        <img
          className="popup__image"
          src={card ? card.link : ""}
          alt={card ? card.name : ""}
          // ref={ref}
        />
        <h4 className="popup__image-name" aria-label="Название места">
          {card ? card.name : ""}
        </h4>
      </div>
    </div>
  );
}

export default ImagePopup;
