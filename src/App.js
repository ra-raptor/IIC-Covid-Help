import React from "react";
import "./assets/styles/main.css";
import DetectLocation from "./components/DetectLocation";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Route } from "react-router-dom";

import AboutPage from "./pages/AboutPage";
import { Signin } from "./signInUpPages/SignIn";

function App() {
  /*OxygenContextProvider is a context provider that has 
  been created in src/contexts/OxygenContextProvider.js 
  it acts as a central data storage for the cards that display oxygen data

  detect location component handles the user location 
  */
  return (
    <>
      <Router>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/login" component={Signin} />
      </Router>
      <DetectLocation />
    </>
  );
}

export default App;
