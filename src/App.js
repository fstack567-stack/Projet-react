import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "./container";
import Details from "./details";
import Asma from "./components/asma";
import Hajar from "./components/hajar";
import Meriem from "./components/meriem";
import Soukaina from "./components/soukaina";
import Safouane from "./components/safouane";
import Sina from "./components/sina";
import Ailal from "./components/Ailal";
import Soufyane from "./components/soufyane";
import Salma from "./components/salma";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Container />} />
        <Route path="/details" element={<Details />} />

        <Route path="/stagiaires/ajermoune" element={<Asma />} />
        <Route path="/stagiaires/abbou" element={<Meriem />} />
        <Route path="/stagiaires/Menguit" element={<Soukaina />} />
        <Route path="/stagiaires/rady" element={<Safouane />} />
        <Route path="/stagiaires/Aidane" element={<Soufyane />} />
        <Route path="/stagiaires/bouhssine" element={<Hajar />} />
        <Route path="/stagiaires/sina" element={<Sina />} />
        <Route path="/stagiaires/ailal" element={<Ailal />} />
        <Route path="/stagiaires/salma" element={<Salma />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
