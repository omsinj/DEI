from flask import Flask, jsonify
from flask_cors import CORS
from routes.trivia_routes import trivia_bp
from routes.user_routes import user_bp
from config import Config
from models import db

app = Flask(__name__)
app.config.from_object(Config)
CORS(app)

# Database initialization
db.init_app(app)

# Blueprint registration
app.register_blueprint(trivia_bp, url_prefix='/api')
app.register_blueprint(user_bp, url_prefix='/api/users')

if __name__ == '__main__':
    app.run(debug=True)
