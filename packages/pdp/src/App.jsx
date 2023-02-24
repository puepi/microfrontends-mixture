import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import Header from "home/Header";
import Footer from "home/Footer"
import SafeComponent from "./SafeComponent";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <SafeComponent>
      <Header />
    </SafeComponent>
    <div className="my-10">
        Contenu d'une page principale d'un des modules. Par exemple, la page principale de la sous-page Demandes de permis
      </div>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
