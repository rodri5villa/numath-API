import { useState } from 'react';
import axios from 'axios';

const IntegralTripleGaussiana = () => {
  const [funcion, setFuncion] = useState('');
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');
  const [d, setD] = useState('');
  const [alpha, setAlpha] = useState('');
  const [beta, setBeta] = useState('');
  const [m, setM] = useState('');
  const [n, setN] = useState('');
  const [p, setP] = useState('');
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState(null);
  const [errores, setErrores] = useState({});

  const manejarCambio = (setter, campo) => (e) => {
    const valor = e.target.value;
    if (/[A-Z]/.test(valor)) {
      setErrores((prev) => ({ ...prev, [campo]: 'No se permiten mayúsculas.' }));
    } else {
      setErrores((prev) => ({ ...prev, [campo]: '' }));
      setter(valor);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setResultado('calculando');
    setErrores({});

    if (!funcion || !a || !b || !c || !d || !alpha || !beta || !m || !n || !p) {
      setError('Por favor, completa todos los campos.');
      setResultado(null);
      return;
    }

    try {
      const res = await axios.post('http://localhost:5000/calculo/integral_triple_gaussiana', {
        funcion,
        a,
        b,
        c_func: c,
        d_func: d,
        alpha_func: alpha,
        beta_func: beta,
        m,
        n,
        p,
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
            Integral Triple Gaussiana
        </h1>

        <div className="text-gray-700 space-y-5 text-base">
          <div className="space-y-3">
            <p>
              El <strong>método de la integral triple gaussiana</strong> aproxima la integral triple empleando 
              <strong>cuadratura de Gauss–Legendre</strong> de orden <code className="bg-gray-200 px-1 rounded">m</code> en 
              <code className="bg-gray-200 px-1 rounded">x</code>, <code className="bg-gray-200 px-1 rounded">n</code> en 
              <code className="bg-gray-200 px-1 rounded">y</code> y <code className="bg-gray-200 px-1 rounded">p</code> en 
              <code className="bg-gray-200 px-1 rounded">z</code>.
            </p>

            <p className="text-2xl font-bold">¿Cómo introducir la función y los parámetros?</p>
             
            <p>
                Usa la variable <code className="bg-gray-200 px-1 rounded">x</code>, <code className="bg-gray-200 px-1 rounded">y</code> 
                y <code className="bg-gray-200 px-1 rounded">z</code> para definir la función.                     
                Puedes utilizar operaciones básicas como: 
                <code className="bg-gray-200 px-1 rounded">+</code>, 
                <code className="bg-gray-200 px-1 rounded">-</code>, 
                <code className="bg-gray-200 px-1 rounded">*</code>, 
                <code className="bg-gray-200 px-1 rounded">/</code>, 
                <code className="bg-gray-200 px-1 rounded">**</code> (potencias).
                
                Para potencias, puedes usar <code className="bg-gray-200 px-1 rounded">^</code> en vez de <code className="bg-gray-200 px-1 rounded">**</code> 
                (por ejemplo, <code className="bg-gray-200 px-1 rounded">x^2</code> será interpretado como <code className="bg-gray-200 px-1 rounded">y**2</code>).
                
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
                <li><code className="bg-gray-100 px-1 rounded">4x^2 - y^4 + 4z</code></li>
                <li><code className="bg-gray-100 px-1 rounded">xyz</code></li>
                <li><code className="bg-gray-100 px-1 rounded">exp(x) - 2y + 5z</code></li>
                <li><code className="bg-gray-100 px-1 rounded">sqrt(2x) - 3y - 7z</code></li>
                <li><code className="bg-gray-100 px-1 rounded">pi/4</code></li>
            </ul>
        </div>
    </div>

        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md space-y-6">
          <div className="space-y-4">
            <div>
              <label className="block mb-1 font-semibold">Función f(x, y, z):</label>
              <input type="text" value={funcion} onChange={manejarCambio(setFuncion, 'funcion')} placeholder="Ej: x*y*z" className="w-full border border-gray-300 rounded-md p-2" required />
              {errores.funcion && <p className="text-red-500 text-sm mt-1">{errores.funcion}</p>}
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="block mb-1 font-semibold">a (límite inferior en x):</label>
                <input type="text" value={a} onChange={manejarCambio(setA, 'a')} placeholder="Ej: 0" className="w-full border border-gray-300 rounded-md p-2" required />
                {errores.a && <p className="text-red-500 text-sm mt-1">{errores.a}</p>}
              </div>
              <div className="flex-1">
                <label className="block mb-1 font-semibold">b (límite superior en x):</label>
                <input type="text" value={b} onChange={manejarCambio(setB, 'b')} placeholder="Ej: pi" className="w-full border border-gray-300 rounded-md p-2" required />
                {errores.b && <p className="text-red-500 text-sm mt-1">{errores.b}</p>}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 font-semibold">c(x) (límite inferior en y):</label>
                <input type="text" value={c} onChange={manejarCambio(setC, 'c')} placeholder="Ej: 0" className="w-full border border-gray-300 rounded-md p-2" required />
                {errores.c && <p className="text-red-500 text-sm mt-1">{errores.c}</p>}
              </div>
              <div>
                <label className="block mb-1 font-semibold">d(x) (límite superior en y):</label>
                <input type="text" value={d} onChange={manejarCambio(setD, 'd')} placeholder="Ej: x" className="w-full border border-gray-300 rounded-md p-2" required />
                {errores.d && <p className="text-red-500 text-sm mt-1">{errores.d}</p>}
              </div>
              <div>
                <label className="block mb-1 font-semibold">α(x, y) (límite inferior en z):</label>
                <input type="text" value={alpha} onChange={manejarCambio(setAlpha, 'alpha')} placeholder="Ej: 0" className="w-full border border-gray-300 rounded-md p-2" required />
                {errores.alpha && <p className="text-red-500 text-sm mt-1">{errores.alpha}</p>}
              </div>
              <div>
                <label className="block mb-1 font-semibold">β(x, y) (límite superior en z):</label>
                <input type="text" value={beta} onChange={manejarCambio(setBeta, 'beta')} placeholder="Ej: y" className="w-full border border-gray-300 rounded-md p-2" required />
                {errores.beta && <p className="text-red-500 text-sm mt-1">{errores.beta}</p>}
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="block mb-1 font-semibold">m (puntos en x):</label>
                <input type="text" value={m} onChange={manejarCambio(setM, 'm')} placeholder="Ej: 5" className="w-full border border-gray-300 rounded-md p-2" required />
                {errores.m && <p className="text-red-500 text-sm mt-1">{errores.m}</p>}
              </div>
              <div>
                <label className="block mb-1 font-semibold">n (puntos en y):</label>
                <input type="text" value={n} onChange={manejarCambio(setN, 'n')} placeholder="Ej: 5" className="w-full border border-gray-300 rounded-md p-2" required />
                {errores.n && <p className="text-red-500 text-sm mt-1">{errores.n}</p>}
              </div>
              <div>
                <label className="block mb-1 font-semibold">p (puntos en z):</label>
                <input type="text" value={p} onChange={manejarCambio(setP, 'p')} placeholder="Ej: 5" className="w-full border border-gray-300 rounded-md p-2" required />
                {errores.p && <p className="text-red-500 text-sm mt-1">{errores.p}</p>}
              </div>
            </div>
          </div>

          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-md transition cursor-pointer">
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
            <p><strong>Valor de la integral triple:</strong> {resultado.resultado}</p>
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

export default IntegralTripleGaussiana;
