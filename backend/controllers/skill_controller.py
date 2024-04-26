from backend.common.models.skill import Skill
from backend import db
from flask import Blueprint
from flask_restful import fields, marshal_with

bp = Blueprint("skills", __name__, url_prefix="/skills")

resource_fields = {
    "id": fields.Integer, 
    "skill": fields.String, 
    "color": fields.String
}

@bp.route("/", methods=["GET"])
@marshal_with(resource_fields)
def index():
    skills = Skill.query.filter().all()
    return skills
