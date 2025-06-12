import { useState } from 'react';
import axios from 'axios';

const Horner = () => {
  const [coeficientes, setCoeficientes] = useState('');
  const [x0, setX0] = useState('');
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState(null);
  const [coeficientesError, setCoeficientesError] = useState('');
  const [x0Error, setX0Error] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    setCoeficientesError('');
    setX0Error('');
    setError(null);
    setResultado('calculando');

    if (!coeficientes.trim() || !x0.trim()) {
      setError('Por favor, introduce los coeficientes y el valor de x0.');
      setResultado(null);
      return;
    }

    try {
      const coefArray = coeficientes.split(',').map(c => c.trim());
      const res = await axios.post('http://localhost:5000/ecuacion/horner', {
        coeficientes: coefArray,
        x0,
      });
      setResultado(res.data);
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.error || 'Error desconocido');
      setResultado(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-4xl mx-auto space-y-10">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Horner
        </h1>

        <div className="text-gray-700 space-y-5 text-base">
          <div className="space-y-3">
            <p>
              El <strong>método de Horner</strong> es una técnica eficiente para evaluar un polinomio y su derivada
              en un punto <code className="bg-gray-200 px-1 rounded">x0</code>, usando una forma reducida de cálculo.
              El polinomio se define por una lista de coeficientes, desde el término de mayor grado al término independiente.
            </p>
            <p className="text-2xl font-bold">¿Qué debe introducir el usuario?</p>
            <p>
              El usuario debe introducir:
              <ul className="list-disc ml-6 space-y-1">
                <li><strong>Coeficientes:</strong> una lista separada por comas, ordenados desde el término de mayor grado hasta el término constante.</li>
                    {/* Ejemplos resaltados en caja */}
                    <div className="bg-blue-50 border border-blue-300 rounded-md p-4 space-y-2">
                        <p className="text-xl font-semibold text-blue-800">Ejemplos válidos:</p>

                        <ul className="list-disc ml-6 space-y-1 text-blue-700">
                            <li><code className="bg-gray-100 px-1 rounded">1, -3, 2</code> para el polinomio <code className="bg-gray-100 px-1 rounded">x² - 3x + 2</code></li>
                            <li><code className="bg-gray-100 px-1 rounded">5, 0, -1, 2</code> para el polinomio <code className="bg-gray-100 px-1 rounded">5x³ -x + 2</code></li>
                            <li><code className="bg-gray-100 px-1 rounded">6, 3, 7, 0, 8</code> para el polinomio <code className="bg-gray-100 px-1 rounded">6x⁴ + 3x³ + 7x² + 8</code></li>
                            <li><code className="bg-gray-100 px-1 rounded">-4, 2</code> para el polinomio <code className="bg-gray-100 px-1 rounded">- 4x + 2</code></li>
                        </ul>
                    </div>
                <li><strong>x0:</strong> el punto en el que se desea evaluar el polinomio y su derivada.</li>
              </ul>
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md space-y-6">
          <div className="space-y-4">
            <div>
              <label className="block mb-1 font-semibold">Coeficientes (separados por comas):</label>
              <input
                type="text"
                value={coeficientes}
                onChange={(e) => {
                  const value = e.target.value;
                  if (/[A-Z]/.test(value)) {
                    setCoeficientesError('No se permiten letras mayúsculas.');
                  } else {
                    setCoeficientesError('');
                    setCoeficientes(value);
                  }
                }}
                placeholder="Ej: 1, -3, 2"
                className="w-full border border-gray-300 rounded-md p-2"
                required
              />
              {coeficientesError && <p className="text-red-500 text-sm mt-1">{coeficientesError}</p>}
            </div>

            <div>
              <label className="block mb-1 font-semibold">Valor de x0:</label>
              <input
                type="text"
                value={x0}
                onChange={(e) => {
                  const value = e.target.value;
                  if (/[A-Z]/.test(value)) {
                    setX0Error('No se permiten letras mayúsculas.');
                  } else {
                    setX0Error('');
                    setX0(value);
                  }
                }}
                placeholder="Ej: 2"
                className="w-full border border-gray-300 rounded-md p-2"
                required
              />
              {x0Error && <p className="text-red-500 text-sm mt-1">{x0Error}</p>}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-md transition cursor-pointer"
          >
            Calcular
          </button>
        </form>

        {resultado === 'calculando' && (
          <div className="bg-blue-100 border border-blue-300 text-blue-700 p-4 rounded-lg text-center">
            Calculando...
          </div>
        )}

        {resultado && resultado !== 'calculando' && (
          <div className="bg-green-100 border border-green-400 text-green-700 p-6 rounded-lg space-y-2">
            <h2 className="text-xl font-semibold">Resultado:</h2>
            <p><strong>Valor del polinomio en x0:</strong> {resultado.resultado}</p>
            <p><strong>Valor de la derivada en x0:</strong> {resultado.derivada}</p>
          </div>
        )}

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 p-4 rounded-lg text-center">
            <strong>Error:</strong> {error}
          </div>
        )}
      </div>
    </div>
  );
};

export default Horner;
