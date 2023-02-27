import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import "remixicon/fonts/remixicon.css"

import "./index.scss";
import Header from "home/Header";
import Footer from "home/Footer"
import SafeComponent from "./SafeComponent";
import PDPContent from "./PDPContent";

const App = () => (
  <Router>
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <Header />
      <div className="my-10">
          Contenu d'une page principale d'un des modules. Par exemple, la page principale de la sous-page Demandes de permis
          <div className="my-10">
           <Switch>
              <Route path="/products/:id" component={PDPContent} />
           </Switch>
          </div>
        </div>
      <Footer />
    </div>
  </Router>
);
ReactDOM.render(<App />, document.getElementById("app"));
