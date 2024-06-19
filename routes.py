from flask import Blueprint, jsonify
from services.trivia_service import get_trivia_questions

trivia_bp = Blueprint('trivia', __name__)

@trivia_bp.route('/trivia/<category>', methods=['GET'])
def get_trivia_category(category):
    try:
        questions = get_trivia_questions(category)
        return jsonify(questions), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500
