from backend.common.models.user import User
from flask import Blueprint
from flask import jsonify
from flask import request

signup_bp = Blueprint("signup", __name__, url_prefix="/signup")

@signup_bp.route("/", methods=["POST"])
def signup():
    email = request.json["email"]
    password = request.json["password"]
    
    user = User.query.filter(User.email==email).first()
    if user is not None:
        return jsonify({
            "status": 409,
            "message": "This email address is already in use."
        }), 409
    else:
        new_user = User()
        new_user.name = ""
        new_user.email = email
        new_user.password = password
        db.session.add(new_user)
        db.session.commit()
        return {
            "status": 200,
            "data": {
                "id": user.id,
                "name": user.name,
            }
        }, 200
