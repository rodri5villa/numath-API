from flask import Blueprint, request, jsonify
import numath as na

dif_int_bp = Blueprint('diferenciacion_e_integracion', __name__)

@dif_int_bp.route('/punto_medio_tres_puntos', methods=['POST'])
def derivada_tres_puntos():
    try:
        data = request.get_json()
        funcion = data['funcion']
        x0 = data['x0']
        h = data['h']

        resultado = na.derivative_three_points_central(funcion, x0, h)

        return jsonify({"resultado": resultado})
    
    except Exception as e:
        return jsonify({"error": str(e)}), 400

@dif_int_bp.route('/extremo_tres_puntos', methods=['POST'])
def derivada_tres_puntos_extremo():
    try:
        data = request.get_json()
        funcion = data['funcion']
        x0 = data['x0']
        h = data['h']

        resultado = na.derivative_three_points_border(funcion, x0, h)

        return jsonify({"resultado": resultado})
    
    except Exception as e:
        return jsonify({"error": str(e)}), 400

@dif_int_bp.route('/punto_medio_cinco_puntos', methods=['POST'])
def derivada_cinco_puntos():
    try:
        data = request.get_json()
        funcion = data['funcion']
        x0 = data['x0']
        h = data['h']

        resultado = na.derivative_five_points_central(funcion, x0, h)

        return jsonify({"resultado": resultado})
    
    except Exception as e:
        return jsonify({"error": str(e)}), 400

@dif_int_bp.route('/extremo_cinco_puntos', methods=['POST'])
def derivada_cinco_puntos_extremo():
    try:
        data = request.get_json()
        funcion = data['funcion']
        x0 = data['x0']
        h = data['h']

        resultado = na.derivative_five_points_border(funcion, x0, h)

        return jsonify({"resultado": resultado})
    
    except Exception as e:
        return jsonify({"error": str(e)}), 400

@dif_int_bp.route('/derivada_por_puntos', methods=['POST'])
def derivada_por_puntos():
    try:
        data = request.get_json()
        puntos = {k: v for k, v in data['datos'].items()}
        x0 = data['x0']

        resultado = na.derivative_unified(puntos, x0)

        return jsonify({"resultado": resultado})
    
    except Exception as e:
        return jsonify({"error": str(e)}), 400

@dif_int_bp.route('/punto_medio_segunda_derivada', methods=['POST'])
def segunda_derivada():
    try:
        data = request.get_json()
        funcion = data['funcion']
        x0 = data['x0']
        h = data['h']

        resultado = na.second_derivative_central(funcion, x0, h)

        return jsonify({"resultado": resultado})
    
    except Exception as e:
        return jsonify({"error": str(e)}), 400

@dif_int_bp.route('/punto_medio_segunda_derivada_puntos', methods=['POST'])
def segunda_derivada_puntos():
    try:
        data = request.get_json()
        puntos = {k: v for k, v in data['datos'].items()}
        x0 = data['x0']

        resultado = na.second_derivative_central_data(puntos, x0)

        return jsonify({"resultado": resultado})
    
    except Exception as e:
        return jsonify({"error": str(e)}), 400

@dif_int_bp.route('/newton_cotes_n1_cerrado', methods=['POST'])
def newton_cotes_n1_cerrado():
    try:
        data = request.get_json()
        funcion = data['funcion']
        a = data['a']
        b = data['b']

        resultado = na.newton_cotes_n1_close(funcion, a, b)

        return jsonify({"resultado": resultado})

    except Exception as e:
        return jsonify({"error": str(e)}), 400

@dif_int_bp.route('/newton_cotes_n2_cerrado', methods=['POST'])
def newton_cotes_n2_cerrado():
    try:
        data = request.get_json()
        funcion = data['funcion']
        a = data['a']
        b = data['b']

        resultado = na.newton_cotes_n2_close(funcion, a, b)

        return jsonify({"resultado": resultado})

    except Exception as e:
        return jsonify({"error": str(e)}), 400

@dif_int_bp.route('/newton_cotes_n3_cerrado', methods=['POST'])
def newton_cotes_n3_cerrado():
    try:
        data = request.get_json()
        funcion = data['funcion']
        a = data['a']
        b = data['b']

        resultado = na.newton_cotes_n3_close(funcion, a, b)

        return jsonify({"resultado": resultado})

    except Exception as e:
        return jsonify({"error": str(e)}), 400

@dif_int_bp.route('/newton_cotes_n4_cerrado', methods=['POST'])
def newton_cotes_n4_cerrado():
    try:
        data = request.get_json()
        funcion = data['funcion']
        a = data['a']
        b = data['b']

        resultado = na.newton_cotes_n4_close(funcion, a, b)

        return jsonify({"resultado": resultado})

    except Exception as e:
        return jsonify({"error": str(e)}), 400

@dif_int_bp.route('/newton_cotes_n0_abierto', methods=['POST'])
def newton_cotes_n0_abierto():
    try:
        data = request.get_json()
        funcion = data['funcion']
        a = data['a']
        b = data['b']

        resultado = na.newton_cotes_n0_open(funcion, a, b)

        return jsonify({"resultado": resultado})

    except Exception as e:
        return jsonify({"error": str(e)}), 400

@dif_int_bp.route('/newton_cotes_n1_abierto', methods=['POST'])
def newton_cotes_n1_abierto():
    try:
        data = request.get_json()
        funcion = data['funcion']
        a = data['a']
        b = data['b']

        resultado = na.newton_cotes_n1_open(funcion, a, b)

        return jsonify({"resultado": resultado})

    except Exception as e:
        return jsonify({"error": str(e)}), 400

@dif_int_bp.route('/newton_cotes_n2_abierto', methods=['POST'])
def newton_cotes_n2_abierto():
    try:
        data = request.get_json()
        funcion = data['funcion']
        a = data['a']
        b = data['b']

        resultado = na.newton_cotes_n2_open(funcion, a, b)

        return jsonify({"resultado": resultado})

    except Exception as e:
        return jsonify({"error": str(e)}), 400

@dif_int_bp.route('/newton_cotes_n3_abierto', methods=['POST'])
def newton_cotes_n3_abierto():
    try:
        data = request.get_json()
        funcion = data['funcion']
        a = data['a']
        b = data['b']

        resultado = na.newton_cotes_n3_open(funcion, a, b)

        return jsonify({"resultado": resultado})

    except Exception as e:
        return jsonify({"error": str(e)}), 400

@dif_int_bp.route('/regla_simpson_compuesta', methods=['POST'])
def regla_simpson_compuesta():
    try:
        data = request.get_json()
        funcion = data['funcion']
        a = data['a']
        b = data['b']
        n = data['n']

        resultado = na.composite_simpson_rule(funcion, a, b, n)

        return jsonify({"resultado": resultado})

    except Exception as e:
        return jsonify({"error": str(e)}), 400

@dif_int_bp.route('/regla_trapezoidal_compuesta', methods=['POST'])
def regla_trapezoidal_compuesta():
    try:
        data = request.get_json()
        funcion = data['funcion']
        a = data['a']
        b = data['b']
        n = data['n']

        resultado = na.composite_trapezoidal_rule(funcion, a, b, n)

        return jsonify({"resultado": resultado})

    except Exception as e:
        return jsonify({"error": str(e)}), 400

@dif_int_bp.route('/regla_punto_medio_compuesta', methods=['POST'])
def regla_punto_medio_compuesta():
    try:
        data = request.get_json()
        funcion = data['funcion']
        a = data['a']
        b = data['b']
        n = data['n']

        resultado = na.composite_midpoint_rule(funcion, a, b, n)

        return jsonify({"resultado": resultado})

    except Exception as e:
        return jsonify({"error": str(e)}), 400

@dif_int_bp.route('/integracion_romberg', methods=['POST'])
def integracion_romberg():
    try:
        data = request.get_json()
        funcion = data['funcion']
        a = data['a']
        b = data['b']
        n = data['n']

        resultado = na.romberg_integration(funcion, a, b, n)
        resultado_formateado = [
            " , ".join(f"{num:.10f}" for num in fila if num != 0.0)
            for fila in resultado[1:] 
        ]

        return jsonify({"resultado": resultado_formateado})

    except Exception as e:
        return jsonify({"error": str(e)}), 400

@dif_int_bp.route('/integral_doble_simpson', methods=['POST'])
def integral_doble_simpson():
    try:
        data = request.get_json()
        funcion = data['funcion']
        a = data['a']
        b = data['b']
        c_func = data['c_func']
        d_func = data['d_func']
        n = data['n']
        m = data['m']

        resultado = na.composite_double_simpson(funcion, a, b, c_func, d_func, n, m)

        return jsonify({"resultado": resultado})

    except Exception as e:
        return jsonify({"error": str(e)}), 400

@dif_int_bp.route('/integral_doble_gaussiana', methods=['POST'])
def integral_doble_gaussiana():
    try:
        data = request.get_json()
        funcion = data['funcion']
        a = data['a']
        b = data['b']
        c_func = data['c_func']
        d_func = data['d_func']
        m = data['m']
        n = data['n']

        resultado = na.double_gaussian_integration(funcion, a, b, c_func, d_func, m, n)

        return jsonify({"resultado": resultado})

    except Exception as e:
        return jsonify({"error": str(e)}), 400

@dif_int_bp.route('/integral_triple_gaussiana', methods=['POST'])
def integral_triple_gaussiana():
    try:
        data = request.get_json()
        funcion = data['funcion']
        a = data['a']
        b = data['b']
        c_func = data['c_func']
        d_func = data['d_func']
        alpha_func = data['alpha_func']
        beta_func = data['beta_func']
        m = data['m']
        n = data['n']
        p = data['p']

        resultado = na.triple_gaussian_integration(funcion, a, b, c_func, d_func, alpha_func, beta_func, m, n, p)

        return jsonify({"resultado": resultado})

    except Exception as e:
        return jsonify({"error": str(e)}), 400
