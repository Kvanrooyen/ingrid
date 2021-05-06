import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Library from "./components/Library";
import About from "./components/About";
import NavBar from "./components/NavBar";
import Welcome from "./components/Welcome";
import Dropdown from "./components/Dropdown";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", hideMenu);
    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });
  return (
    <BrowserRouter>
      <NavBar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route component={Welcome} path='/' exact />
        <Route component={About} path='/about' />
        <Route component={Library} path='/library' />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
