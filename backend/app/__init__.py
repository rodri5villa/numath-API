from flask import Flask
from app.ecuaciones_una_variable_controller import ecuaciones_bp
from flask_cors import CORS

app = Flask(__name__)
app.register_blueprint(ecuaciones_bp, url_prefix='/ecuacion')

# Utilizamos CORS para poder conectar el Frontend, en un puerto diferente al Backend, con el Backend
CORS(app)
