from backend.common.models.user import User
from backend import db
from flask import Blueprint
from flask import request
from flask_restful import fields, marshal_with
import datetime

users_bp = Blueprint("users", __name__, url_prefix="/users")

resource_fields = {
    "id": fields.Integer, 
    "name": fields.String, 
    "email": fields.String,
    "password": fields.String,
    "github": fields.String,
    "qiita": fields.String,
    "zenn": fields.String,
    "skill": fields.String,
    "level": fields.Integer,
    "created_at": fields.DateTime,
    "updated_at": fields.DateTime,
}

@users_bp.route("/<int:user_id>", methods=["GET"])
@marshal_with(resource_fields)
def show_user_skills(user_id):
    current_user_skills = User.query.filter(User.id==user_id).all()
    return current_user_skills

@users_bp.route("/<int:user_id>", methods=["POST"])
@marshal_with(resource_fields)
def add_user():
    req = request.args
    user_name = req.get("name")
    new_user = User(User.name==user_name)
    db.session.add(new_user)
    db.session.commit()
    return new_user.name
