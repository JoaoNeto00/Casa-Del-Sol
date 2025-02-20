import React from "react";
import { GlobalStyle } from "../styles";
import Header from "../components/header";
import { About, Contact, Gallery } from "../components/about";

const Home: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <About />
      <Gallery />
      <Contact />
    </>
  );
};

export default Home;
