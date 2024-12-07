import { useState } from "react";
import logoPage from "/public/Design/shared/logo.svg";
import "./navbar.css";

export function NavBarHomePage() {
  const [activeIndex, setActiveIndex] = useState(0); // Estado para rastrear el índice activo

  const handleNavClick = (index) => {
    setActiveIndex(index); // Actualiza el índice activo
  };

  return (
    <section className="content__navBarHomePage">
      <div className="bx--logo">
        <img src={logoPage} alt="Logo Page" className="logo" />
      </div>

      <nav className="navbarHomePage">
        {["Home", "Destination", "Crew", "Technology"].map((item, index) => (
          <a
            key={index}
            href="#"
            className={`items-navbarHomePage ${
              activeIndex === index ? "sectionActive" : ""
            }`}
            onClick={() => handleNavClick(index)} // Cambia el índice activo al hacer clic
          >
            <strong>{`0${index}`}</strong> {item}
          </a>
        ))}
      </nav>
    </section>
  );
}
