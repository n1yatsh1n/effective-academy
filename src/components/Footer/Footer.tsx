import marvelLogo from "../../assets/marvelLogo.svg";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footerWrapper">
      <div className="container">
        <div className="footerContent">
          <img className="footerLogo" src={marvelLogo} alt="marvelLogo" />
          <div className="footerTextWrapper">
            <p className="footerText">
              Data provided by MARVEL. {currentYear} © MARVEL
            </p>
            <a href="https://developer.marvel.com/" className="footerLink">
              developer.marvel.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
