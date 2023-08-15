import './App.css';
import { Routes, Route } from "react-router-dom";
import Landing from "./views/Landing/Landing";
import Home from "./views/Home/Home";
import Create from "./views/Create/Create";
import Detail from "./views/Detail/Detail";
import About from './views/About/About';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/:id" element={<Detail />} />
        <Route path="/create" element={<Create />} />
        <Route path="/about" element={<About />} />
        {/* usar /* en el path para mostrar algo siempre, por ejemplo la NavBar!! */}
      </Routes>
    </div>
  );
}

export default App;
