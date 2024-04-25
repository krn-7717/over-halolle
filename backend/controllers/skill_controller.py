from backend.common.models.skill import Skill
from flask import Blueprint
from flask import jsonify
from backend import db

bp = Blueprint("skills", __name__, url_prefix="/skills")

@bp.route("/", methods=["GET"])
def index():
    skills = Skill.query.filter(Skill.id == 1).all()
    return jsonify({
        "id": skills[0].id, 
        "skill": skills[0].skill, 
        "color": skills[0].color
    })
