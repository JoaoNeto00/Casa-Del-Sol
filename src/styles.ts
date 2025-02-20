import Link from "react-scroll/modules/components/Link";
import styled, { createGlobalStyle } from "styled-components";

// Cores do tema
const colors = {
  cream: "#F5F5DC",
  sand: "#D2B48C",
  oceanBlue: "#0077BE",
  seaGreen: "#2E8B57",
  white: "#FFFFFF",
  darkBlue: "#005f73",
  lightGray: "#F0F0F0",
  sunsetOrange: "#FF7F50",
  lightSkyBlue: "#87CEFA", // Azul mais suave
  paleGold: "#FFD700", // Cor dourada suave
};

// Fontes
const fonts = {
  heading: '"Lora", serif', // Fonte mais elegante para os títulos
  body: '"Nunito", sans-serif', // Fonte suave e moderna para o corpo do texto
};

export const GlobalStyle = createGlobalStyle`
  /* Reset de estilos padrão */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Open Sans', sans-serif;
    background-color: #f9f9f9;
    color: #333;
    line-height: 1.6;
    scroll-behavior: smooth; /* Ativando scroll suave */
  }

  h1, h2, h3, h4 {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    color: #2e8b57;
  }

  p {
    color: #666;
  }
`;

export const Section = styled.section`
  padding: 100px 20px;
  background-color: #f1f1f1;
  margin-top: 80px; /* Para evitar que a navbar sobreponha */
  border-bottom: 2px solid #ddd;

  h2 {
    color: #0077be;
    text-align: center;
    font-size: 2rem;
    margin-bottom: 20px;
  }

  p {
    text-align: center;
    font-size: 1.2rem;
    color: #666;
  }

  img {
    display: block;
    margin: 0 auto;
    border-radius: 10px;
    max-width: 100%;
    transition: transform 0.3s ease;
  }

  img:hover {
    transform: scale(1.05);
  }
`;

export const Navbar = styled.nav`
  background-color: #fff;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 10px 20px;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

// Botão para fechar o menu
export const CloseMenuButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  font-size: 24px;
  font-weight: bold;
  color: #333;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #4caf50;
  }

  &:focus {
    outline: none;
  }

  @media (min-width: 769px) {
    display: none; /* Não mostra o botão em telas grandes */
  }
`;

export const Logo = styled.img`
  width: 150px;
`;

export const NavLinks = styled.div<{ isOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    background-color: #fff;
    flex-direction: column;
    gap: 10px;
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    padding: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

export const NavLink = styled(Link)`
  padding: 10px 20px;
  text-decoration: none;
  color: #333;
  font-size: 18px;
  font-weight: 500;
  border-radius: 8px;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #4caf50;
    color: white;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    font-size: 16px;
    width: 100%;
    text-align: center;
  }
`;

export const HamburgerMenu = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 30px;
  height: 21px;
  background: transparent;
  border: none;
  cursor: pointer;

  div {
    width: 25px;
    height: 3px;
    background-color: #333;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const LanguageSwitch = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  @media (max-width: 768px) {
    margin-top: 10px;
  }

  span {
    cursor: pointer;
  }
`;

// Container principal
export const Container = styled.div`
  background-color: ${colors.cream};
  color: ${colors.seaGreen};
  font-family: ${fonts.body};
  text-align: center;
  padding: 40px 20px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  overflow-x: hidden;
  background-image: linear-gradient(
    135deg,
    ${colors.lightSkyBlue},
    ${colors.cream}
  );
`;

// Estilo do cabeçalho
export const HeaderContainer = styled.header`
  background-color: ${colors.sand};
  padding: 40px 30px;
  width: 100%;
  border-bottom: 5px solid ${colors.oceanBlue};
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  position: relative;
  transition: all 0.3s ease;

  h1 {
    color: ${colors.oceanBlue};
    font-size: 3.5rem;
    margin: 0;
    font-family: ${fonts.heading};
    font-weight: 700;
    letter-spacing: 3px;
    text-transform: uppercase;
    transition: transform 0.3s ease;
    text-align: left;
    max-width: 400px;
  }

  img {
    max-height: 100px;
    transition: transform 0.3s ease;
    &:hover {
      transform: scale(1.1);
    }
  }

  &:hover h1 {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
      font-size: 2.5rem;
      text-align: center;
    }
    img {
      max-height: 80px;
    }
  }
`;

// Botões de mudança de idioma
export const LanguageButton = styled.button`
  background-color: ${colors.oceanBlue};
  color: ${colors.white};
  border: none;
  padding: 14px 28px;
  margin: 10px;
  cursor: pointer;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: background-color 0.3s ease, transform 0.2s ease,
    box-shadow 0.3s ease, scale 0.2s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: ${colors.seaGreen};
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    padding: 12px 24px;
  }
`;

// Botão do WhatsApp
export const WhatsAppButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background-color: #25d366;
  color: white;
  border-radius: 25px;
  font-size: 16px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #128c7e;
  }

  @media (max-width: 768px) {
    font-size: 14px; /* Diminui o tamanho da fonte em telas menores */
    padding: 8px 15px; /* Diminui o padding */
  }

  @media (max-width: 480px) {
    font-size: 12px; /* Font menor para telas muito pequenas */
    padding: 6px 12px; /* Reduz ainda mais o padding */
  }
`;

// Estilo da galeria
// Certifique-se de que o contêiner tenha a largura necessária para o carrossel
export const GalleryContainer = styled.div`
  position: relative;
  background-color: white; /* Fundo branco para o container */
  padding: 30px; /* Espaçamento interno para a galeria */
  border-radius: 10px; /* Bordas arredondadas */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1); /* Sombra suave ao redor da galeria */

  .slick-prev,
  .slick-next {
    background-color: white; /* Fundo branco nas setas */
    border-radius: 50%;
    padding: 10px;
    color: #0077be; /* Cor da seta (ajuste conforme necessário) */
    border: 2px solid #0077be; /* Borda para destacar as setas */
    z-index: 1000;

    &:hover {
      background-color: #f0f0f0; /* Cor de fundo ao passar o mouse */
    }
  }

  .slick-prev {
    left: 10px;
    z-index: 10;
  }

  .slick-next {
    right: 10px;
    z-index: 10;
  }
`;

// Estilo do rodapé
export const FooterContainer = styled.footer`
  background-color: ${colors.sand};
  padding: 30px;
  width: 100%;
  margin-top: auto;
  border-top: 5px solid ${colors.oceanBlue};
  box-shadow: 0 -8px 16px rgba(0, 0, 0, 0.1);
  text-align: center;

  p {
    color: ${colors.oceanBlue};
    margin: 10px 0;
    font-size: 1.2rem;
    font-family: ${fonts.body}; // Usando a fonte suave para o texto
  }

  a {
    color: ${colors.seaGreen};
    text-decoration: none;
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  /* Linha fina separando o rodapé do conteúdo */
  border-top: 1px solid ${colors.oceanBlue};
`;
