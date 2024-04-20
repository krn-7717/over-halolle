from app import app
from controllers.skill_controller import bp

app.register_blueprint(bp)
