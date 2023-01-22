import React from "react";
import About from "./About";
import Favorites from "./Favorites";
import Form from "./Form";

function MenuHeader() {
  return (
    <header>
      <h1>
        G L O A T 
      </h1>
      <About />
      <Favorites />
      <Form />
    </header>
  );
}

export default MenuHeader;
