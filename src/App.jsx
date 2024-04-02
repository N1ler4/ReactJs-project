import React from "react";
import { useState, useEffect, useRef } from "react";
import {
  Header,
  Footer,
  Sidebar,
  Intro,
  FirstCards,
  About,
  Recommendation,
} from "@component";
import { Container, Main } from "@containers";
import AfterIntro from "@component/after-intro";

const App = () => {
  return (
    <>
      <Header />
      <Main>
        <Intro />
        <AfterIntro />
        <FirstCards />
        <About />
        <Recommendation />
      </Main>
      <Footer />
    </>
  );
};

export default App;
