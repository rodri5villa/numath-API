import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Biseccion from './pages/ecuaciones_una_variable/Biseccion';
import Footer from './components/Footer'; 
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/metodo/ecuaciones/biseccion" element={<Biseccion />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
