from flask import Blueprint
from flask import request
from flask import jsonify
from flask_restful import fields
from flask_restful import marshal_with

from backend.models.user import User

users_bp = Blueprint("users", __name__, url_prefix="/users")

resource_fields = {
    "id": fields.Integer, 
    "name": fields.String, 
    "email": fields.String,
    "password": fields.String,
    "github": fields.String,
    "qiita": fields.String,
    "zenn": fields.String,
    "created_at": fields.String,
    "updated_at": fields.String,
}

@users_bp.route("/", methods=["GET"])
@marshal_with(resource_fields)
def show_all_user():
    all_users = User.get_all()
    return all_users

@users_bp.route("/<int:id>", methods=["GET"])
@marshal_with(resource_fields)
def show_user_info(id):
    current_user_skills = User.query.filter(User.id==id).all()
    return current_user_skills

@users_bp.route("/<int:id>", methods=["POST"])
def change_user_name(id):
    id = request.json["userId"]
    new_user_name = request.json["newUserName"]
    
    renamed_user = User.rename(id, new_user_name)
    return {
        "status": 200, 
        "data": {
            "message": "Username change successful.", 
            "name": renamed_user.name
        }
    }, 200

@users_bp.route("/<int:id>", methods=["DELETE"])
def delete_user(id):
    user_id = request.json["userId"]
    
    User.delete(id)
    
    return {
        "status": 200, 
        "data": {
            "message": "User deletion successful."
        }
    }, 200
