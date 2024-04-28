from backend import db
from backend.common.models.user import User
import datetime
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
        new_user.name = "匿名ユーザ"
        new_user.email = email
        new_user.password = password
        dt = datetime.date.today()
        string_date = dt.strftime("%Y.%m.%d")
        current_date = string_date[2:]
        new_user.create_at = current_date
        db.session.add(new_user)
        db.session.commit()
        return {
            "status": 200,
            "data": {
                "id": new_user.id,
                "name": new_user.name,
            }
        }, 200
