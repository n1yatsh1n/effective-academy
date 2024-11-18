import "./Header.css";
import marvelLogo from "../../assets/marvelLogo.svg";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header className="headerWrapper">
      <div className="container">
        <div className="headerContent">
          <img className="headerLogo" src={marvelLogo} alt="marvelLogo" />
          <nav className="headerLinks">
            <NavLink
              style={{ marginRight: "10px" }}
              className={({ isActive }) =>
                isActive ? "activeLink" : undefined
              }
              to="/characters"
            >
              Characters
            </NavLink>
            <NavLink
              style={{ marginRight: "10px" }}
              className={({ isActive }) =>
                isActive ? "activeLink" : undefined
              }
              to="/comics"
            >
              Comics
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "activeLink" : undefined
              }
              to="/favourites"
            >
              Favourites
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
