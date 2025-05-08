from flask import Blueprint, request, jsonify
import numath as na

dif_int_bp = Blueprint('diferenciacion', __name__)

@dif_int_bp.route('/punto_medio_tres_puntos', methods=['POST'])
def derivada_tres_puntos():
    try:
        data = request.get_json()
        funcion = data['funcion']
        x0 = float(data['x0'])
        h = float(data['h'])

        resultado = na.derivative_three_points_central(funcion, x0, h)

        return jsonify({"resultado": resultado})
    
    except Exception as e:
        return jsonify({"error": str(e)}), 400

@dif_int_bp.route('/extremo_tres_puntos', methods=['POST'])
def derivada_tres_puntos_extremo():
    try:
        data = request.get_json()
        funcion = data['funcion']
        x0 = float(data['x0'])
        h = float(data['h'])

        resultado = na.derivative_three_points_border(funcion, x0, h)

        return jsonify({"resultado": resultado})
    
    except Exception as e:
        return jsonify({"error": str(e)}), 400

@dif_int_bp.route('/punto_medio_cinco_puntos', methods=['POST'])
def derivada_cinco_puntos():
    try:
        data = request.get_json()
        funcion = data['funcion']
        x0 = float(data['x0'])
        h = float(data['h'])

        resultado = na.derivative_five_points_central(funcion, x0, h)

        return jsonify({"resultado": resultado})
    
    except Exception as e:
        return jsonify({"error": str(e)}), 400

@dif_int_bp.route('/extremo_cinco_puntos', methods=['POST'])
def derivada_cinco_puntos_extremo():
    try:
        data = request.get_json()
        funcion = data['funcion']
        x0 = float(data['x0'])
        h = float(data['h'])

        resultado = na.derivative_five_points_border(funcion, x0, h)

        return jsonify({"resultado": resultado})
    
    except Exception as e:
        return jsonify({"error": str(e)}), 400

@dif_int_bp.route('/derivada_por_puntos', methods=['POST'])
def derivada_por_puntos():
    try:
        data = request.get_json()
        puntos = {float(k): float(v) for k, v in data['datos'].items()}
        x0 = float(data['x0'])

        resultado = na.derivative_unified(puntos, x0)

        return jsonify({"resultado": resultado})
    
    except Exception as e:
        return jsonify({"error": str(e)}), 400

@dif_int_bp.route('/punto_medio_segunda_derivada', methods=['POST'])
def segunda_derivada():
    try:
        data = request.get_json()
        funcion = data['funcion']
        x0 = float(data['x0'])
        h = float(data['h'])

        resultado = na.second_derivative_central(funcion, x0, h)

        return jsonify({"resultado": resultado})
    
    except Exception as e:
        return jsonify({"error": str(e)}), 400

@dif_int_bp.route('/punto_medio_segunda_derivada_puntos', methods=['POST'])
def segunda_derivada_puntos():
    try:
        data = request.get_json()
        puntos = {float(k): float(v) for k, v in data['datos'].items()}
        x0 = float(data['x0'])

        resultado = na.second_derivative_central_data(puntos, x0)

        return jsonify({"resultado": resultado})
    
    except Exception as e:
        return jsonify({"error": str(e)}), 400
