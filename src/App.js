import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './components/Home';
import NavBar from './components/NavBar';
import HowToPlay from './components/HowToPlay';
import Play from './components/Play';

function App() {
  return (
    <div className="App">
      <h1>Go Slay!</h1>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route path="/howToPlay" element={<HowToPlay/>}></Route>
          <Route path="/play" element={<Play/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
