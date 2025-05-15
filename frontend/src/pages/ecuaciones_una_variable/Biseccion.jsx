import { useState } from 'react';
import axios from 'axios';

const Biseccion = () => {
  const [funcion, setFuncion] = useState('');
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [TOL, setTOL] = useState('');
  const [N0, setN0] = useState('');
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState(null);
  const [funcionError, setFuncionError] = useState('');
  const [aError, setAError] = useState('');
  const [bError, setBError] = useState('');
  const [TOLerror, setTOLError] = useState('');
  const [N0error, setN0Error] = useState('');

  const handleSubmit = async (e) => {
  e.preventDefault();

  setFuncionError('');
  setAError('');
  setBError('');
  setTOLError('');
  setN0Error('');
  setError(null);
  setResultado('calculando');

  if (!funcion.trim() || !a.trim() || !b.trim()) {
    setError('Por favor, completa la función, el valor de a y el valor de b.');
    setResultado(null);
    return;
  }

  try {
    const res = await axios.post('http://localhost:5000/ecuacion/biseccion', {
      funcion,
      a,
      b,
      ...(TOL && { TOL }),
      ...(N0 && { N0 }),
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
                Bisección
            </h1>

            {/* Explicación */}
            <div className="text-gray-700 space-y-5 text-base">
                <div className="space-y-3">
                    <p>
                       El <strong>método de bisección</strong> es un método numérico para encontrar la raíz de una función continua de forma aproximada. Se basa en el teorema del valor 
                       intermedio, el cual establece que si una función <code className="bg-gray-200 px-1 rounded">f(x)</code> es continua en un intervalo 
                       <code className="bg-gray-200 px-1 rounded">[a, b]</code> y <code className="bg-gray-200 px-1 rounded">f(a)</code> y 
                       <code className="bg-gray-200 px-1 rounded">f(b)</code> tienen signos opuestos, entonces existe al menos un punto 
                       <code className="bg-gray-200 px-1 rounded">c</code> en <code className="bg-gray-200 px-1 rounded">[a, b]</code> tal que 
                       <code className="bg-gray-200 px-1 rounded">f(c) = 0</code>.
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
                    <strong>Nota:</strong> La tolerancia (<code className="bg-gray-200 px-1 rounded">TOL</code>) y el número máximo de iteraciones (<code className="bg-gray-200 px-1 rounded">N0</code>) tienen valores por defecto. 
                    Siempre que no se especifiquen otros valores, utilizará los indicados en sus casillas como ejemplo (<code className="bg-gray-200 px-1 rounded">TOL=0.00001 & N0=100</code>).
                </p>
            </div>

            {/* Formulario */}
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md space-y-6">
                <div className="space-y-4">
                    {/* Función */}
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
                            placeholder="Ej: x^2 - 2"
                            className="w-full border border-gray-300 rounded-md p-2"
                            required
                        />
                        {funcionError && <p className="text-red-500 text-sm mt-1">{funcionError}</p>}
                    </div>

                    {/* a y b */}
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1">
                            <label className="block mb-1 font-semibold">a (extremo izquierdo):</label>
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
                            <label className="block mb-1 font-semibold">b (extremo derecho):</label>
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

                    {/* TOL y N0 */}
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1">
                            <label className="block mb-1 font-semibold">Tolerancia (opcional):</label>
                            <input
                            type="text"
                            value={TOL}
                            onChange={(e) => {
                                const value = e.target.value;
                                if (/[A-Z]/.test(value)) {
                                setTOLError('No se permiten mayúsculas.');
                                } else {
                                setTOLError('');
                                setTOL(value);
                                }
                            }}
                            placeholder="Ej: 0.00001"
                            className="w-full border border-gray-300 rounded-md p-2"
                            />
                            {TOLerror && <p className="text-red-500 text-sm mt-1">{TOLerror}</p>}
                        </div>

                        <div className="flex-1">
                            <label className="block mb-1 font-semibold">Máximo de iteraciones (opcional):</label>
                            <input
                            type="text"
                            value={N0}
                            onChange={(e) => {
                                const value = e.target.value;
                                if (/[A-Z]/.test(value)) {
                                setN0Error('No se permiten mayúsculas.');
                                } else {
                                setN0Error('');
                                setN0(value);
                                }
                            }}
                            placeholder="Ej: 100"
                            className="w-full border border-gray-300 rounded-md p-2"
                            />
                            {N0error && <p className="text-red-500 text-sm mt-1">{N0error}</p>}
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
                    <p><strong>Raíz aproximada:</strong> {resultado.resultado}</p>
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

export default Biseccion;
