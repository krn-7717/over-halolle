from backend.common.models.user import User
from backend.common.models.user_skill import UserSkill
from backend import db
from flask import Blueprint
from flask import request
from flask_restful import fields
from flask_restful import marshal_with

users_bp = Blueprint("users", __name__, url_prefix="/users")

resource_fields = {
    "id": fields.Integer, 
    "name": fields.String, 
    "email": fields.String,
    "password": fields.String,
    "github": fields.String,
    "qiita": fields.String,
    "zenn": fields.String,
    "created_at": fields.DateTime,
    "updated_at": fields.DateTime,
}

user_skill_fields = {
    "id": fields.Integer,
    "user_id": fields.Integer,
    "color": fields.String,
    "skill": fields.String, 
    "created_at": fields.DateTime,
    "updated_at": fields.DateTime,
}

@users_bp.route("/", methods=["GET"])
@marshal_with(resource_fields)
def show_all_user():
    all_users = User.query.filter().all()
    return all_users

@users_bp.route("/<int:id>", methods=["GET"])
@marshal_with(resource_fields)
def show_user_skills(id):
    current_user_skills = User.query.filter(User.id==id).all()
    return current_user_skills

@users_bp.route("/<int:id>", methods=["POST"])
def change_user_name(id):
    user_id = request.json["userId"]
    new_user_name = request.json["newUserName"]
    
    renamed_user = User.query.filter(User.id==user_id).first()
    renamed_user.name = new_user_name
    db.session.commit()
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
    
    User.query.filter(User.id==user_id).delete()
    db.session.commit()
    return {
        "status": 200, 
        "data": {
            "message": "User deletion successful."
        }
    }, 200

@users_bp.route("/<int:id>/skills", methods=["GET"])
@marshal_with(user_skill_fields)
def add_user_skill(id):
    user_skills = UserSkill.query.filter().all()
    return user_skills
