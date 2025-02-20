import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Flag from "react-world-flags";
import {
  HamburgerMenu,
  LanguageSwitch,
  Logo,
  Navbar,
  NavbarContainer,
  NavLink,
  NavLinks,
  WhatsAppButton,
  CloseMenuButton,
} from "../styles";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <Navbar>
      <NavbarContainer>
        <Logo src={"/assets/logo.jpeg"} alt="Casa del Sol Logo" />

        {/* Menu Hamburguer para telas pequenas */}
        <HamburgerMenu onClick={toggleMenu}>
          <div />
          <div />
          <div />
        </HamburgerMenu>

        {/* Menu aberto com botão de fechar */}
        <NavLinks isOpen={isMenuOpen}>
          <CloseMenuButton onClick={closeMenu}>X</CloseMenuButton>
          <NavLink to="about" smooth={true} duration={500}>
            {t("about")}
          </NavLink>
          <NavLink to="gallery" smooth={true} duration={500}>
            {t("gallery")}
          </NavLink>
          <NavLink to="contact" smooth={true} duration={500}>
            {t("contact")}
          </NavLink>
        </NavLinks>

        <LanguageSwitch>
          <span
            role="button"
            onClick={() => handleLanguageChange("pt")}
            style={{ cursor: "pointer", marginLeft: "10px" }}
          >
            <Flag code="BR" style={{ width: "30px", height: "20px" }} />
          </span>
          <span
            role="button"
            onClick={() => handleLanguageChange("en")}
            style={{ cursor: "pointer", marginLeft: "10px" }}
          >
            <Flag code="US" style={{ width: "30px", height: "20px" }} />
          </span>
        </LanguageSwitch>

        {/* Botão WhatsApp */}
        <WhatsAppButton
          href="https://wa.me/5588981263877"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </WhatsAppButton>
      </NavbarContainer>
    </Navbar>
  );
};

export default Header;
