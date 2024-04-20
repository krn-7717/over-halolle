from flask import Blueprint
from backend.common.models.skill import Skill

bp = Blueprint("skills", __name__, url_prefix="/skills")

@bp.route("/")
def index():
    return "Hello skill page"
