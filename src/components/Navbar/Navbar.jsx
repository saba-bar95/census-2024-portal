import "./Navbar.scss";
import { Link } from "react-router-dom";
import LanguageChanger from "./LanguageChanger/LanguageChanger";
import census from "/src/assets/images/census-logo.png";
import censusEn from "/src/assets/images/census-logo-en.svg";
import sakstatKa from "/src/assets/images/logo-transparent-ka.png";
import sakstatEn from "/src/assets/images/logo-transparent-en.png";
import translations from "../../translation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const language = localStorage.getItem("language");
  const navBarText = translations[language].navbar;
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        const currentScrollY = window.scrollY;

        // If scrolling up, show navbar
        if (currentScrollY < lastScrollY && currentScrollY > 100) {
          setIsVisible(true);
        }
        // If scrolling down, hide navbar (but keep visible at top)
        else if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setIsVisible(false);
        }
        // Always show when near the top
        else if (currentScrollY <= 100) {
          setIsVisible(true);
        }

        setLastScrollY(currentScrollY);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => window.removeEventListener("scroll", controlNavbar);
    }
  }, [lastScrollY]);

  return (
    <div className={`nav-container ${isVisible ? "visible" : "hidden"}`}>
      <div className="top-side">
        <nav>
          <div className="right-side">
            <Link to={`/${language}`}>
              <img
                src={language === "ka" ? sakstatKa : sakstatEn}
                alt="sakstat"
                className="sakstat-logo"
              />
            </Link>
            <Link to={`/${language}`} className="census">
              <img
                src={language === "ka" ? census : censusEn}
                alt="census"
                className="census-logo"
              />
            </Link>
          </div>
          <div className="left-side">
            <ul>
              <li>
                <Link to={`/${language}`}>{navBarText.main}</Link>
              </li>
              <li>
                <Link to={`/${language}/questionnaires`}>
                  {navBarText.questionnaries}
                </Link>
              </li>
              <li>
                <Link to={`/${language}/methodology`}>
                  {navBarText.methodology}
                </Link>
              </li>
              <li>
                <Link to={`/${language}/results`}>{navBarText.results}</Link>
              </li>
            </ul>
            <div className="buttons-container">
              <button
                className="self-registration--btn"
                style={{ display: "none" }}>
                {navBarText.selfRegistration}
                <span className="tooltip">{navBarText.tooltip}</span>
              </button>
            </div>
            <LanguageChanger />
          </div>
        </nav>
      </div>
      <div className="bottom-side" style={{ display: "none" }}>
        <a href="tel:+995322501353">
          <p>{navBarText.hotline1}</p>
        </a>
        <p>{navBarText.hotline2}</p>
      </div>
    </div>
  );
}
