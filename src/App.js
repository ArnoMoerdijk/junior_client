import React from "react";
import {
  Header,
  HomePage,
  AdressenLijst,
  Footer,
} from "./components";
import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App" id="App">
      <Header />
      <div className="AppContent" id="AppContent">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='adressenlijst' element={<AdressenLijst />} />
          <Route path='hello' />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
