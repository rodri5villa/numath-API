from flask import Blueprint, request, jsonify
import numath as na

ecuaciones_bp = Blueprint('ecuaciones', __name__)

@ecuaciones_bp.route('/biseccion', methods=['POST'])
def resolver_biseccion():
    try:
        data = request.get_json()
        funcion = data['funcion']
        a = float(data['a'])
        b = float(data['b'])
        tol = float(data.get('TOL', 1e-5))
        n0 = int(data.get('N0', 100))

        resultado, iteraciones = na.bisection(funcion, a, b, tol, n0)

        return jsonify({
            "resultado": resultado,
            "iteraciones": iteraciones
        })

    except Exception as e:
        return jsonify({"error": str(e)}), 400
