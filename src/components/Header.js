import logo from "../images/MestoLogo.svg";


function Header() {
    return(
        <header className="header">
        <img
          src={logo}
          className="header__logo"
          alt="Место - Россия"
        />
        </header>

    )
}

export default Header;


