from flask import Blueprint, request, jsonify
import numath as na

ecuaciones_bp = Blueprint('ecuaciones', __name__)

@ecuaciones_bp.route('/biseccion', methods=['POST'])
def resolver_biseccion():
    try:
        data = request.get_json()
        funcion = data['funcion']
        a = data['a']
        b = data['b']
        tol = data.get('TOL', 1e-5)
        n0 = data.get('N0', 100)

        resultado, iteraciones = na.bisection(funcion, a, b, tol, n0)

        return jsonify({"resultado": resultado, "iteraciones": iteraciones})

    except Exception as e:
        return jsonify({"error": str(e)}), 400

@ecuaciones_bp.route('/punto-fijo', methods=['POST'])
def resolver_punto_fijo():
    try:
        data = request.get_json()
        funcion = data['funcion']
        p0 = data['p0']
        tol = data.get('TOL', 1e-5)
        n0 = data.get('N0', 100)

        resultado, iteraciones = na.fixed_point_iteration(funcion, p0, tol, n0)

        return jsonify({"resultado": resultado, "iteraciones": iteraciones})
    
    except Exception as e:
        return jsonify({"error": str(e)}), 400

@ecuaciones_bp.route('/newton', methods=['POST'])
def resolver_newton():
    try:
        data = request.get_json()
        funcion = data['funcion']
        p0 = data['p0']
        tol = data.get('TOL', 1e-5)
        n0 = data.get('N0', 100)

        resultado, iteraciones = na.newton_method(funcion, p0, tol, n0)

        return jsonify({"resultado": resultado, "iteraciones": iteraciones})
    
    except Exception as e:
        return jsonify({"error": str(e)}), 400

@ecuaciones_bp.route('/secante', methods=['POST'])
def resolver_secante():
    try:
        data = request.get_json()
        funcion = data['funcion']
        p0 = data['p0']
        p1 = data['p1']
        tol = data.get('TOL', 1e-5)
        n0 = data.get('N0', 100)

        resultado, iteraciones = na.secant_method(funcion, p0, p1, tol, n0)

        return jsonify({"resultado": resultado, "iteraciones": iteraciones})
    
    except Exception as e:
        return jsonify({"error": str(e)}), 400

@ecuaciones_bp.route('/posicion-falsa', methods=['POST'])
def resolver_posicion_falsa():
    try:
        data = request.get_json()
        funcion = data['funcion']
        p0 = data['p0']
        p1 = data['p1']
        tol = data.get('TOL', 1e-5)
        n0 = data.get('N0', 100)

        resultado, iteraciones = na.false_position(funcion, p0, p1, tol, n0)

        return jsonify({"resultado": resultado, "iteraciones": iteraciones})
    
    except Exception as e:
        return jsonify({"error": str(e)}), 400

@ecuaciones_bp.route('/steffensen', methods=['POST'])
def resolver_steffensen():
    try:
        data = request.get_json()
        funcion = data['funcion']
        p0 = data['p0']
        tol = data.get('TOL', 1e-5)
        n0 = data.get('N0', 100)

        resultado, iteraciones = na.steffensen_method(funcion, p0, tol, n0)

        return jsonify({"resultado": resultado, "iteraciones": iteraciones})
    
    except Exception as e:
        return jsonify({"error": str(e)}), 400

@ecuaciones_bp.route('/horner', methods=['POST'])
def resolver_horner():
    try:
        data = request.get_json()
        coeficientes = data['coeficientes']  # lista de coeficientes
        x0 = data['x0']

        resultado, derivada = na.horner_method(coeficientes, x0)

        return jsonify({"resultado": resultado, "derivada": derivada})
    
    except Exception as e:
        return jsonify({"error": str(e)}), 400

@ecuaciones_bp.route('/muller', methods=['POST'])
def resolver_muller():
    try:
        data = request.get_json()
        funcion = data['funcion']
        p0 = data['p0']
        p1 = data['p1']
        p2 = data['p2']
        tol = data.get('TOL', 1e-5)
        n0 = data.get('N0', 100)

        resultado = na.muller_method(funcion, p0, p1, p2, tol, n0)

        return jsonify({"resultado": resultado})
    
    except Exception as e:
        return jsonify({"error": str(e)}), 400
