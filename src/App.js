import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "./container";
import Details from "./details";
import Asma from "./components/asma";
import Meriem from "./components/meriem";
import Soukaina from "./components/soukaina";
import Safouane from "./components/safouane";
import Soufyane from "./components/soufyane";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Container />} />
        <Route path="/details" element={<Details />} />

        <Route path="/stagiaires/ajermoune" element={<Asma />} />
        <Route path="/stagiaires/abbou" element={<Meriem />} />
        <Route path="/stagiaires/Menguit" element={<Soukaina />} />
<<<<<<< HEAD
        <Route path="/stagiaires/Aidane" element={<Soufyane />} />
=======

        <Route path="/stagiaires/bouhssine" element={<Hajar />} />
        <Route path="/stagiaires/sina" element={<Sina />} />
        <Route path="/stagiaires/bouhssine" element={<Hajar />} />
        <Route path="/stagiaires/rady" element={<Safouane />} />
>>>>>>> bad96bf0c922c1196893488569b066b57622234e
      </Routes>
    </BrowserRouter>
  );
}

export default App;
