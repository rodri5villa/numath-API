import { useState } from 'react';
import axios from 'axios';

const ExtremoCincoPuntos = () => {
  const [modo, setModo] = useState('funcion');
  const [funcion, setFuncion] = useState('');
  const [x0Funcion, setX0Funcion] = useState('');
  const [x0Puntos, setX0Puntos] = useState('');
  const [h, setH] = useState('');
  const [datosTexto, setDatosTexto] = useState('');
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState(null);
  const [errores, setErrores] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setResultado('calculando');
    setErrores({});

    if (modo === 'funcion') {
      if (!funcion || !x0Funcion || !h) {
        setError('Por favor, completa todos los campos.');
        setResultado(null);
        return;
      }
    } else {
      if (!datosTexto || !x0Puntos) {
        setError('Por favor, completa todos los campos.');
        setResultado(null);
        return;
      }
    }

    try {
      let res;
      if (modo === 'funcion') {
        res = await axios.post('http://localhost:5000/calculo/extremo_cinco_puntos', {
          funcion,
          x0: x0Funcion,
          h,
        });
      } else {
        const pares = datosTexto.split(',');
        const datos = {};
        pares.forEach((par) => {
          const [clave, valor] = par.split(':');
          if (clave && valor) datos[clave.trim()] = valor.trim();
        });
        res = await axios.post('http://localhost:5000/calculo/derivada_por_puntos', {
          datos,
          x0: x0Puntos,
        });
      }
      setResultado(res.data);
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.error || 'Error desconocido');
      setResultado(null);
    }
  };

  const manejarCambio = (setter, campo) => (e) => {
    const valor = e.target.value;
    if (/[A-Z]/.test(valor)) {
      setErrores((prev) => ({ ...prev, [campo]: 'No se permiten mayúsculas.' }));
    } else {
      setErrores((prev) => ({ ...prev, [campo]: '' }));
      setter(valor);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
        <div className="max-w-4xl mx-auto space-y-10">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
                Extremo de 5 Puntos
            </h1>

            {/* Explicación */}
            <div className="text-gray-700 space-y-5 text-base">
                <div className="space-y-3">
                    <p>
                       El <strong>método de extremo de 5 puntos</strong> calcula la derivada de una función en un punto extremo utilizando la 
                       fórmula del extremo de cinco puntos, ya sea a través de su función o de los puntos obtenidos.
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

                <p>
                    <strong>Nota:</strong>

                    <div className="bg-yellow-50 border border-yellow-300 rounded-md p-4 text-yellow-800">
                        En la pestaña de <strong>Puntos</strong>, introduce los puntos separados por comas con el formato <code>x:y</code>.<br />
                        Ejemplo:
                        <pre className="mt-2 text-sm bg-white p-2 rounded border border-yellow-200">
                            1:2.5, 2:3.7, 3:4.1
                        </pre>
                    </div>
                </p>
                <div className="flex space-x-4 justify-center mb-6">
                    <button
                        type="button"
                        className={`cursor-pointer px-4 py-2 rounded-t-lg border-b-2 transition font-medium ${modo === 'funcion' ? 'bg-white border-blue-600 text-blue-600' : 'bg-gray-200 border-transparent text-gray-500'}`}
                        onClick={() => setModo('funcion')}
                    >
                        Función
                    </button>
                    <button
                        type="button"
                        className={`cursor-pointer px-4 py-2 rounded-t-lg border-b-2 transition font-medium ${modo === 'puntos' ? 'bg-white border-blue-600 text-blue-600' : 'bg-gray-200 border-transparent text-gray-500'}`}
                        onClick={() => setModo('puntos')}
                    >
                        Puntos
                    </button>
                </div>
            </div>

        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md space-y-6">
          {modo === 'funcion' && (
            <>
              <div>
                <label className="block mb-1 font-semibold">Función:</label>
                <input
                  type="text"
                  value={funcion}
                  onChange={manejarCambio(setFuncion, 'funcion')}
                  placeholder="Ej: sin(x) + x^2"
                  className="w-full border border-gray-300 rounded-md p-2"
                  required
                />
                {errores.funcion && <p className="text-red-500 text-sm mt-1">{errores.funcion}</p>}
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <label className="block mb-1 font-semibold">x₀:</label>
                  <input
                    type="text"
                    value={x0Funcion}
                    onChange={manejarCambio(setX0Funcion, 'x0Funcion')}
                    placeholder="Ej: 1.5"
                    className="w-full border border-gray-300 rounded-md p-2"
                    required
                  />
                  {errores.x0Funcion && <p className="text-red-500 text-sm mt-1">{errores.x0Funcion}</p>}
                </div>
                <div className="flex-1">
                  <label className="block mb-1 font-semibold">h (paso):</label>
                  <input
                    type="text"
                    value={h}
                    onChange={manejarCambio(setH, 'h')}
                    placeholder="Ej: 0.01"
                    className="w-full border border-gray-300 rounded-md p-2"
                    required
                  />
                  {errores.h && <p className="text-red-500 text-sm mt-1">{errores.h}</p>}
                </div>
              </div>
            </>
          )}

          {modo === 'puntos' && (
            <>
              <div>
                <label className="block mb-1 font-semibold">Puntos:</label>
                <textarea
                  value={datosTexto}
                  onChange={manejarCambio(setDatosTexto, 'datosTexto')}
                  placeholder="Ej: 1:2.5, 2:3.7, 3:4.1"
                  className="w-full border border-gray-300 rounded-md p-2 h-32"
                  required
                />
                {errores.datosTexto && <p className="text-red-500 text-sm mt-1">{errores.datosTexto}</p>}
              </div>
              <div>
                <label className="block mb-1 font-semibold">x₀:</label>
                <input
                  type="text"
                  value={x0Puntos}
                  onChange={manejarCambio(setX0Puntos, 'x0Puntos')}
                  placeholder="Ej: 2"
                  className="w-full border border-gray-300 rounded-md p-2"
                  required
                />
                {errores.x0Puntos && <p className="text-red-500 text-sm mt-1">{errores.x0Puntos}</p>}
              </div>
            </>
          )}

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
            <p><strong>Valor de la derivada:</strong> {resultado.resultado}</p>
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

export default ExtremoCincoPuntos;
