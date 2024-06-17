from flask import Blueprint
from flask import jsonify
from flask import request

from backend.models.user import User


login_bp = Blueprint("login", __name__, url_prefix="/login")

@login_bp.route("/", methods=["POST"])
def login():
    email = request.json["email"]
    password = request.json["password"]
    
    user = User.query.filter(User.email==email, User.password==password).first()
    if user is None:
        return jsonify({
            "status": 401,
            "message": "Invalid email address or password."
        }), 401

    return {
        "status": 200,
        "data": {
            "id": user.id,
            "name": user.name,
            "github": None,
            "qiitaid": None
        }
    }, 200
