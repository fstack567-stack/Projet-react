import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Container from './container';
import Details from './details';
import Asma from './components/asma';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Container/>}/>
        <Route path='/details'  element={<Details/>}/>
        <Route path='/stagiaires/1' element={<Asma/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
