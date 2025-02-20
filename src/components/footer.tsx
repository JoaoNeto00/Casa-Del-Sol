import React from "react";
import { FooterContainer } from "../styles";

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <p>Contato: (88) 98126-3877 | casadelsoljeri@hotmail.com</p>
      <p>
        Visite nosso site:{" "}
        <a href="http://www.casadelsoljeri.com.br">www.casadelsoljeri.com.br</a>
      </p>
    </FooterContainer>
  );
};

export default Footer;
