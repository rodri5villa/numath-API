import { useState } from 'react';
import axios from 'axios';

const NewtonCotesN4Cerrado = () => {
  const [funcion, setFuncion] = useState('');
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState(null);
  const [funcionError, setFuncionError] = useState('');
  const [aError, setAError] = useState('');
  const [bError, setBError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    setFuncionError('');
    setAError('');
    setBError('');
    setError(null);
    setResultado('calculando');

    if (!funcion.trim() || !a.trim() || !b.trim()) {
      setError('Por favor, completa la función, el valor de a y el valor de b.');
      setResultado(null);
      return;
    }

    try {
      const res = await axios.post('http://localhost:5000/calculo/newton_cotes_n4_cerrado', {
        funcion,
        a,
        b
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
          Newton-Cotes Cerrado n = 4
        </h1>

        {/* Explicación */}
        <div className="text-gray-700 space-y-5 text-base">
          <div className="space-y-3">
            <p>
              El <strong>método de Newton-Cotes cerrado de orden 4,</strong> es una fórmula de integración numérica que aproxima la integral 
              definida de una función sobre un intervalo <code className="bg-gray-200 px-1 rounded">[a, b]</code> utilizando cinco puntos equiespaciados,
              donde <code className="bg-gray-200 px-1 rounded">x0 = a</code>, <code className="bg-gray-200 px-1 rounded">x1 = a+h</code>, 
              <code className="bg-gray-200 px-1 rounded">x2 = a+2*h</code>, <code className="bg-gray-200 px-1 rounded">x3 = a+3*h</code> y 
              <code className="bg-gray-200 px-1 rounded">x4 = b</code>.
            </p>
            <p className="text-2xl font-bold">¿Cómo introducir la función y los parámetros?</p>
            
            <p>
                Usa la variable <code className="bg-gray-200 px-1 rounded">x</code> para definir la función.                     
                Puedes utilizar operaciones básicas como: 
                <code className="bg-gray-200 px-1 rounded">+</code>, 
                <code className="bg-gray-200 px-1 rounded">-</code>, 
                <code className="bg-gray-200 px-1 rounded">*</code>, 
                <code className="bg-gray-200 px-1 rounded">/</code>, 
                <code className="bg-gray-200 px-1 rounded">**</code> (potencias).
                
                Para potencias, puedes usar <code className="bg-gray-200 px-1 rounded">^</code> en vez de <code className="bg-gray-200 px-1 rounded">**</code> 
                (por ejemplo, <code className="bg-gray-200 px-1 rounded">x^2</code> será interpretado como <code className="bg-gray-200 px-1 rounded">x**2</code>).
                
                También puedes escribir expresiones sin necesidad de poner explícitamente el símbolo de multiplicación. 
                Por ejemplo: <code className="bg-gray-200 px-1 rounded">2x</code> será interpretado automáticamente como 
                <code className="bg-gray-200 px-1 rounded">2*x</code>, y <code className="bg-gray-200 px-1 rounded">2sin(x)</code> como 
                <code className="bg-gray-200 px-1 rounded">2*sin(x)</code>.
                
                Se permiten funciones trigonométricas y matemáticas habituales:
            </p>

            <ul className="list-disc ml-6 space-y-1">
                <li><code className="bg-gray-200 px-1 rounded">sin(x)</code>, <code className="bg-gray-200 px-1 rounded">cos(x)</code>, <code className="bg-gray-200 px-1 rounded">tan(x)</code></li>
                <li><code className="bg-gray-200 px-1 rounded">asin(x)</code>, <code className="bg-gray-200 px-1 rounded">acos(x)</code>, <code className="bg-gray-200 px-1 rounded">atan(x)</code></li>
                <li><code className="bg-gray-200 px-1 rounded">exp(x)</code>, <code className="bg-gray-200 px-1 rounded">ln(x)</code> (logaritmo natural)</li>
                <li><code className="bg-gray-200 px-1 rounded">sqrt(x)</code> (raíz cuadrada)</li>
                <li><code className="bg-gray-200 px-1 rounded">pow(x, y)</code> (potencia)</li>
            </ul>

            <p>
                También puedes usar las constantes <code className="bg-gray-200 px-1 rounded">pi</code> y <code className="bg-gray-200 px-1 rounded">exp()</code> para <strong>π</strong> y el número <strong>e</strong> respectivamente.
            </p>

            <p>Es importante escribir correctamente los paréntesis para que la expresión sea válida.</p>
        </div>

        {/* Ejemplos resaltados en caja */}
        <div className="bg-blue-50 border border-blue-300 rounded-md p-4 space-y-2">
            <p className="text-xl font-semibold text-blue-800">Ejemplos válidos:</p>

            <ul className="list-disc ml-6 space-y-1 text-blue-700">
                <li><code className="bg-gray-100 px-1 rounded">4x^2 - 4</code></li>
                <li><code className="bg-gray-100 px-1 rounded">3sin(x) - 0.5</code></li>
                <li><code className="bg-gray-100 px-1 rounded">exp(x) - 2</code></li>
                <li><code className="bg-gray-100 px-1 rounded">sqrt(2x) - 3</code></li>
                <li><code className="bg-gray-100 px-1 rounded">pi/4</code></li>
            </ul>
        </div>
    </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md space-y-6">
          <div className="space-y-4">
            <div>
              <label className="block mb-1 font-semibold">Función:</label>
              <input
                type="text"
                value={funcion}
                onChange={(e) => {
                  const value = e.target.value;
                  if (/[A-Z]/.test(value)) {
                    setFuncionError('No se permiten mayúsculas.');
                  } else {
                    setFuncionError('');
                    setFuncion(value);
                  }
                }}
                placeholder="Ej: x^2 + 3x"
                className="w-full border border-gray-300 rounded-md p-2"
                required
              />
              {funcionError && <p className="text-red-500 text-sm mt-1">{funcionError}</p>}
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="block mb-1 font-semibold">a (límite inferior):</label>
                <input
                  type="text"
                  value={a}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (/[A-Z]/.test(value)) {
                      setAError('No se permiten mayúsculas.');
                    } else {
                      setAError('');
                      setA(value);
                    }
                  }}
                  placeholder="Ej: 0"
                  className="w-full border border-gray-300 rounded-md p-2"
                  required
                />
                {aError && <p className="text-red-500 text-sm mt-1">{aError}</p>}
              </div>
              <div className="flex-1">
                <label className="block mb-1 font-semibold">b (límite superior):</label>
                <input
                  type="text"
                  value={b}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (/[A-Z]/.test(value)) {
                      setBError('No se permiten mayúsculas.');
                    } else {
                      setBError('');
                      setB(value);
                    }
                  }}
                  placeholder="Ej: 2"
                  className="w-full border border-gray-300 rounded-md p-2"
                  required
                />
                {bError && <p className="text-red-500 text-sm mt-1">{bError}</p>}
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-md transition cursor-pointer"
          >
            Calcular
          </button>
        </form>

        {/* Resultado / Errores */}
        {resultado === 'calculando' && (
          <div className="bg-blue-100 border border-blue-300 text-blue-700 p-4 rounded-lg text-center">
            Calculando...
          </div>
        )}

        {resultado && resultado !== 'calculando' && (
          <div className="bg-green-100 border border-green-400 text-green-700 p-6 rounded-lg space-y-2">
            <h2 className="text-xl font-semibold">Resultado:</h2>
            <p><strong>Integral aproximada:</strong> {resultado.resultado}</p>
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

export default NewtonCotesN4Cerrado;
