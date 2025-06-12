import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer'; 
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Biseccion from './pages/ecuaciones_una_variable/Biseccion';
import PuntoFijo from './pages/ecuaciones_una_variable/PuntoFijo';
import Newton from './pages/ecuaciones_una_variable/Newton';
import Secante from './pages/ecuaciones_una_variable/Secante';
import PosicionFalsa from './pages/ecuaciones_una_variable/PosicionFalsa';
import Steffensen from './pages/ecuaciones_una_variable/Steffensen';
import Horner from './pages/ecuaciones_una_variable/Horner';
import Muller from './pages/ecuaciones_una_variable/Muller';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/metodo/ecuaciones/biseccion" element={<Biseccion />} />
            <Route path="/metodo/ecuaciones/punto-fijo" element={<PuntoFijo />} />
            <Route path="/metodo/ecuaciones/newton" element={<Newton />} />
            <Route path="/metodo/ecuaciones/secante" element={<Secante />} />
            <Route path="/metodo/ecuaciones/posicion-falsa" element={<PosicionFalsa />} />
            <Route path="/metodo/ecuaciones/steffensen" element={<Steffensen />} />
            <Route path="/metodo/ecuaciones/horner" element={<Horner />} />
            <Route path="/metodo/ecuaciones/muller" element={<Muller />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
