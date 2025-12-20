import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "./container";
import Details from "./details";
import Asma from "./components/asma";
import Meriem from "./components/meriem";
import Soukaina from "./components/soukaina";
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
        <Route path="/stagiaires/Aidane" element={<Soufyane />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
