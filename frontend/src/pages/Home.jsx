import { Link } from 'react-router-dom';

const Home = () => {
  const modulos = [
    {
      nombre: 'Ecuaciones de una variable',
      rutaModulo: 'ecuaciones',
      metodos: [
        { nombre: 'Bisección', ruta: 'biseccion' },
        { nombre: 'Punto Fijo', ruta: 'punto-fijo' },
        { nombre: 'Newton', ruta: 'newton' },
        { nombre: 'Secante', ruta: 'secante' },
        { nombre: 'Posición Falsa', ruta: 'posicion-falsa' },
        { nombre: 'Steffensen', ruta: 'steffensen' },
        { nombre: 'Horner', ruta: 'horner' },
        { nombre: 'Muller', ruta: 'muller' },
      ],
    },
    {
      nombre: 'Diferenciación numérica e integración',
      rutaModulo: 'calculo',
      metodos: [
        { nombre: 'Punto Medio Tres Puntos', ruta: 'punto-medio-tres-puntos' },
        { nombre: 'Extremo Tres Puntos', ruta: 'extremo-tres-puntos' },
        { nombre: 'Punto Medio Cinco Puntos', ruta: 'punto-medio-cinco-puntos' },
        { nombre: 'Extremo Cinco Puntos', ruta: 'extremo-cinco-puntos' },
        { nombre: 'Derivada por Puntos', ruta: 'derivada-por-puntos' },
        { nombre: 'Segunda Derivada', ruta: 'segunda-derivada' },
        { nombre: 'Segunda Derivada por Puntos', ruta: 'segunda-derivada-puntos' },
        { nombre: 'Newton-Cotes N=1 Cerrado', ruta: 'newton-cotes-n1-cerrado' },
        { nombre: 'Newton-Cotes N=2 Cerrado', ruta: 'newton-cotes-n2-cerrado' },
        { nombre: 'Newton-Cotes N=3 Cerrado', ruta: 'newton-cotes-n3-cerrado' },
        { nombre: 'Newton-Cotes N=4 Cerrado', ruta: 'newton-cotes-n4-cerrado' },
        { nombre: 'Newton-Cotes N=0 Abierto', ruta: 'newton-cotes-n0-abierto' },
        { nombre: 'Newton-Cotes N=1 Abierto', ruta: 'newton-cotes-n1-abierto' },
        { nombre: 'Newton-Cotes N=2 Abierto', ruta: 'newton-cotes-n2-abierto' },
        { nombre: 'Newton-Cotes N=3 Abierto', ruta: 'newton-cotes-n3-abierto' },
        { nombre: 'Regla Simpson Compuesta', ruta: 'regla-simpson-compuesta' },
        { nombre: 'Regla Trapezoidal Compuesta', ruta: 'regla-trapezoidal-compuesta' },
        { nombre: 'Regla Punto Medio Compuesta', ruta: 'regla-punto-medio-compuesta' },
        { nombre: 'Integración Romberg', ruta: 'integracion-romberg' },
        { nombre: 'Integral Doble Simpson', ruta: 'integral-doble-simpson' },
        { nombre: 'Integral Doble Gaussiana', ruta: 'integral-doble-gaussiana' },
        { nombre: 'Integral Triple Gaussiana', ruta: 'integral-triple-gaussiana' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-center text-gray-800 mb-4">
          Bienvenido a Numath
        </h1>

        {/* Texto de bienvenida bonito */}
        <div className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto space-y-3">
          <p>
            Numath es una plataforma de cálculo numérico que ofrece múltiples métodos
            de resolución de operaciones de matemática numérica.
          </p>
          <p>Esperamos que te sirva de ayuda.</p>
        </div>

        {modulos.map((modulo, idx) => (
          <div key={idx} className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-700 mb-8 border-b-2 pb-2 border-gray-300">
              {modulo.nombre}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {modulo.metodos.map((metodo, idm) => (
                <Link
                  key={idm}
                  to={`/metodo/${modulo.rutaModulo}/${metodo.ruta}`}
                  className="bg-white border border-gray-200 rounded-lg shadow-sm p-3 hover:shadow-md transition hover:scale-105 text-center text-gray-700 text-sm font-medium"
                >
                  {metodo.nombre}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
