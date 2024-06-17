from flask import Blueprint
from flask_restful import fields
from flask_restful import marshal_with

from backend.models.skill import Skill


skills_bp = Blueprint("skills", __name__, url_prefix="/skills")

resource_fields = {
    "id": fields.Integer, 
    "skill": fields.String, 
    "color": fields.String
}

@skills_bp.route("/", methods=["GET"])
@marshal_with(resource_fields)
def index():
    skills = Skill.get_all()
    return skills
