# Documentación Backend

## Introducción

Este backend ha sido desarrollado en Python utilizando el microframework **Flask**. Proporciona servicios para la resolución de ecuaciones de una variable, derivación numérica e integración de funciones matemáticas, integrándose con la librería **numath**.

La arquitectura es modular, basada en blueprints, y está diseñada para ser sencilla, mantenible y fácil de conectar a un frontend mediante CORS.

## Estructura del Proyecto

```
app/
|-- __init__.py
|-- ecuaciones_una_variable_controller.py
|-- diferenciacion_numerica_e_integracion_controller.py
run.py
```

- `__init__.py`: Inicializa la aplicación Flask, registra los blueprints y activa CORS.
- `ecuaciones_una_variable_controller.py`: Controlador de métodos de resolución de ecuaciones.
- `diferenciacion_numerica_e_integracion_controller.py`: Controlador de derivadas numéricas e integración.
- `run.py`: Archivo principal para ejecutar el backend.

## Tecnologías utilizadas

- **Python 3.11**
- **Flask** (framework principal)
- **Flask-CORS** (para permitir el acceso del frontend)
- **numath** (librería numérica desarrollada como parte del proyecto)

## Configuración de la Aplicación

En `__init__.py`:

- Se crea la instancia de la aplicación Flask.
- Se registran dos blueprints:

  - `/ecuacion`: Para operaciones de ecuaciones de una variable.
  - `/calculo`: Para operaciones de derivación e integración.
- Se habilita **CORS** para permitir la comunicación entre diferentes puertos (frontend y backend).

En `run.py`:

- Se importa la instancia de la aplicación desde `app`.
- Se ejecuta el servidor Flask.

## Blueprints y Endpoints

### 1. ecuaciones_una_variable_controller.py

Contiene endpoints para resolver los diferentes métodos de ecuaciones de una variable importados desde numath.

**Endpoints disponibles:**

- `/biseccion`
- `/punto-fijo`
- `/newton`
- `/secante`
- `/posicion-falsa`
- `/steffensen`
- `/horner`
- `/muller`

Cada uno recibe un JSON en el body de la petición POST con los parámetros necesarios y devuelve el resultado.

### 2. diferenciacion_numerica_e_integracion_controller.py

Contiene endpoints para resolver los diferentes métodos de derivación numérica e integración importados desde numath.

**Endpoints de Derivación:**

- `/punto_medio_tres_puntos`
- `/extremo_tres_puntos`
- `/punto_medio_cinco_puntos`
- `/extremo_cinco_puntos`
- `/derivada_por_puntos`
- `/punto_medio_segunda_derivada`
- `/punto_medio_segunda_derivada_puntos`

**Endpoints de Integración:**

- **Newton-Cotes cerradas:**

  - `/newton_cotes_n1_cerrado`
  - `/newton_cotes_n2_cerrado`
  - `/newton_cotes_n3_cerrado`
  - `/newton_cotes_n4_cerrado`

- **Newton-Cotes abiertas:**

  - `/newton_cotes_n0_abierto`
  - `/newton_cotes_n1_abierto`
  - `/newton_cotes_n2_abierto`
  - `/newton_cotes_n3_abierto`

- **Reglas compuestas:**

  - `/regla_simpson_compuesta`
  - `/regla_trapezoidal_compuesta`
  - `/regla_punto_medio_compuesta`

- **Métodos avanzados:**

  - `/integracion_romberg`
  - `/integral_doble_simpson`
  - `/integral_doble_gaussiana`
  - `/integral_triple_gaussiana`

## Tratamiento de Errores

Cada endpoint está protegido mediante bloques `try-except`.

- Si la operación tiene éxito, devuelve un JSON con el resultado.
- Si se produce algún error (por ejemplo, entrada malformada o problema de ejecución), se devuelve un JSON con la clave `"error"` y el mensaje correspondiente, junto a un código de estado **400 (Bad Request)**.

## Ejemplo de Request-Response

**Petición (POST a /ecuacion/biseccion):**

```json
{
  "funcion": "x^2 - 4",
  "a": "0",
  "b": "3",
  "TOL": "1e-5",
  "N0": "100"
}
```

**Respuesta:**

```json
{
  "resultado": 2.000000238418579,
  "iteraciones": 19
}
```
