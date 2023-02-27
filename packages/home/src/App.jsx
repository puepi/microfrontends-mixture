import React,{Suspense} from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import Header from "./Header";
import Footer from "./Footer";
import HomeContent from "./HomeContent";

const App = () => (
  <div className="text-3xl mx-auto max-w-6xl">
    <Header/>
      <div className="my-10">
        Page d'accueil affichant les liens vers les différents modules du Sigif.<br/>
        <ul className="text-center p-2">
          <li><a href="">Administration</a></li>
          <li><a href="">Abattages</a></li>
          <li><a href="">Titres forestiers</a></li>
          <li><a href="">Opérations parcs</a></li>
          <li>....</li>
          <li>....</li>
          <li>....</li>
        </ul>
        Chaque module est une application à part entière developpée éventuellement par une seule équipe.<br/>
        Cette page d'accueil (micro app) rend disponible aux autres l'en-tête et  le pied de page de l'application
        Elle sollicite à son tour les micro interfaces déployées ailleurs par d'autres développeurs, en l'occurence le menu déroulant Sidebar
        <div>
          <HomeContent></HomeContent>
        </div>
      </div>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
