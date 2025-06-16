import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer'; 
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Biseccion from './pages/ecuaciones_una_variable/Biseccion';
import PuntoFijo from './pages/ecuaciones_una_variable/PuntoFijo';
import Newton from './pages/ecuaciones_una_variable/Newton';
import Secante from './pages/ecuaciones_una_variable/Secante';
import PosicionFalsa from './pages/ecuaciones_una_variable/PosicionFalsa';
import Steffensen from './pages/ecuaciones_una_variable/Steffensen';
import Horner from './pages/ecuaciones_una_variable/Horner';
import Muller from './pages/ecuaciones_una_variable/Muller';
import NewtonCotesN1Cerrado from './pages/diferenciacion_numerica_e_integracion/NewtonCotesN1Cerrado';
import NewtonCotesN2Cerrado from './pages/diferenciacion_numerica_e_integracion/NewtonCotesN2Cerrado';
import NewtonCotesN3Cerrado from './pages/diferenciacion_numerica_e_integracion/NewtonCotesN3Cerrado';
import NewtonCotesN4Cerrado from './pages/diferenciacion_numerica_e_integracion/NewtonCotesN4Cerrado';
import NewtonCotesN0Abierto from './pages/diferenciacion_numerica_e_integracion/NewtonCotesN0Abierto';
import NewtonCotesN1Abierto from './pages/diferenciacion_numerica_e_integracion/NewtonCotesN1Abierto';
import NewtonCotesN2Abierto from './pages/diferenciacion_numerica_e_integracion/NewtonCotesN2Abierto';
import NewtonCotesN3Abierto from './pages/diferenciacion_numerica_e_integracion/NewtonCotesN3Abierto';
import SimpsonCompuesta from './pages/diferenciacion_numerica_e_integracion/SimpsonCompuesta';
import TrapezoidalCompuesta from './pages/diferenciacion_numerica_e_integracion/TrapezoidalCompuesta';
import PuntoMedioCompuesta from './pages/diferenciacion_numerica_e_integracion/PuntoMedioCompuesta';
import IntegracionRomberg from './pages/diferenciacion_numerica_e_integracion/IntegracionRomberg';

function App() {
  return (
    <Router>
      <ScrollToTop />
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
            <Route path="/metodo/calculo/newton-cotes-n1-cerrado" element={<NewtonCotesN1Cerrado />} />
            <Route path="/metodo/calculo/newton-cotes-n2-cerrado" element={<NewtonCotesN2Cerrado />} />
            <Route path="/metodo/calculo/newton-cotes-n3-cerrado" element={<NewtonCotesN3Cerrado />} />
            <Route path="/metodo/calculo/newton-cotes-n4-cerrado" element={<NewtonCotesN4Cerrado />} />
            <Route path="/metodo/calculo/newton-cotes-n0-abierto" element={<NewtonCotesN0Abierto />} />
            <Route path="/metodo/calculo/newton-cotes-n1-abierto" element={<NewtonCotesN1Abierto />} />
            <Route path="/metodo/calculo/newton-cotes-n2-abierto" element={<NewtonCotesN2Abierto />} />
            <Route path="/metodo/calculo/newton-cotes-n3-abierto" element={<NewtonCotesN3Abierto />} />
            <Route path="/metodo/calculo/regla-simpson-compuesta" element={<SimpsonCompuesta />} />
            <Route path="/metodo/calculo/regla-trapezoidal-compuesta" element={<TrapezoidalCompuesta />} />
            <Route path="/metodo/calculo/regla-punto-medio-compuesta" element={<PuntoMedioCompuesta />} />
            <Route path="/metodo/calculo/integracion-romberg" element={<IntegracionRomberg />} />
            
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
