from backend.common.models.skill import Skill
from backend.common.models.user import User
from backend.common.models.user_skill import UserSkill
from backend import db
from flask import Blueprint
from flask import request
from flask import jsonify
from flask_restful import fields
from flask_restful import marshal_with
from backend.utils.color import search_color
from backend.utils.calc_skill_level import calc_skill_level
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
    "created_at": fields.String,
    "updated_at": fields.String,
}

user_skill_fields = {
    "skill": fields.String,
    "level": fields.Integer,
    "color": fields.String
}

skill_for_each_fields = {
    "date": fields.String,
    "level": fields.Integer
}

@users_bp.route("/", methods=["GET"])
@marshal_with(resource_fields)
def show_all_user():
    all_users = User.query.filter().all()
    return all_users

@users_bp.route("/<int:id>", methods=["GET"])
@marshal_with(resource_fields)
def show_user_info(id):
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
def show_user_skills(id):
    user_skills = UserSkill.query.filter().all()
    return user_skills

@users_bp.route("/<int:id>/skills", methods=["POST"])
@marshal_with(user_skill_fields)
def post_user_skills(id):
    user_skills = UserSkill.query.filter().all()
    return user_skills, 200

@users_bp.route("/<int:id>/save-skills", methods=["POST"])
@marshal_with(user_skill_fields)
def save_user_skills(id):
    inputData = request.json["inputData"]
    skill = inputData["skill"]
    understanding = inputData["understanding"]
    confidence = inputData["confidence"]
    isTutorial = inputData["isTutorial"]
    isUse = inputData["isUse"]
    isDevelop = inputData["isDevelop"]
    
    level = calc_skill_level(understanding, confidence, isTutorial, isUse, isDevelop)
    new_skill = UserSkill()
    new_skill.user_id = id
    new_skill.skill = skill
    new_skill.level = level
    new_skill.color = search_color(skill)
    dt = datetime.date.today()
    string_date = dt.strftime("%Y.%m.%d")
    current_date = string_date[2:]
    new_skill.create_at = current_date
    db.session.add(new_skill)
    db.session.commit()
    return new_skill, 200

@users_bp.route("/<int:id>/skill/history", methods=["POST"])
@marshal_with(skill_for_each_fields)
def post_user_skill_history(id):
    user_id = request.json["userId"]
    skill = request.json["skill"]
    
    user_skills = UserSkill.query.filter(UserSkill.user_id==user_id).all()
    
    res = []
    for u in user_skills:
        res.append({
            "date": u.create_at, 
            "level": u.level
        })
    return res, 200
