from flask import Blueprint
from flask import request
from flask import jsonify
from flask_restful import fields
from flask_restful import marshal_with

from backend.models.user_skill import UserSkill
from backend.utils.calc_skill_level import calc_skill_level


user_skill_bp = Blueprint("user_skills", __name__, url_prefix="/users")

user_skill_fields = {
    "skill": fields.String,
    "level": fields.Integer,
    "color": fields.String
}

skill_for_each_fields = {
    "date": fields.String,
    "level": fields.Integer
}

@user_skill_bp.route("/<int:id>/skills", methods=["GET"])
@marshal_with(user_skill_fields)
def show_user_skills(id):
    user_skills = UserSkill.get_all(id)
    return user_skills

@user_skill_bp.route("/<int:id>/skills", methods=["POST"])
@marshal_with(user_skill_fields)
def post_user_skills(id):
    user_id = request.json["userId"]
    user_skills = UserSkill.get_all(user_id)
    return user_skills, 200

@user_skill_bp.route("/<int:id>/save-skills", methods=["POST"])
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
    new_skill = UserSkill.create(id, skill, level)
    return new_skill, 200

@user_skill_bp.route("/<int:id>/skill/history", methods=["POST"])
@marshal_with(skill_for_each_fields)
def post_user_skill_history(id):
    id = request.json["userId"]
    skill = request.json["skill"]
    
    user_skills = UserSkill.get_by_id(id)
    
    res = []
    for u in user_skills:
        res.append({
            "date": u.create_at, 
            "level": u.level
        })
    return res, 200
