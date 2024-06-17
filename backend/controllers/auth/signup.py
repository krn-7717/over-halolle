from flask import Blueprint
from flask import jsonify
from flask import request

from backend.models.user import User


signup_bp = Blueprint("signup", __name__, url_prefix="/signup")

@signup_bp.route("/", methods=["POST"])
def signup():
    email = request.json["email"]
    password = request.json["password"]
    
    user = User.get_by_email(email)
    if user is not None:
        return jsonify({
            "status": 409,
            "message": "This email address is already in use."
        }), 409

    new_user = User.create(email=email, password=password)
    return {
        "status": 200,
        "data": {
            "id": new_user.id,
            "name": new_user.name,
        }
    }, 200
