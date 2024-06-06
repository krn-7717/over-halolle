from flask import Flask
from flask_sqlalchemy import SQLAlchemy


db = SQLAlchemy()

def create_app():
    app = Flask(__name__)
    app.config.from_object("backend.config.base_setting.Config")
    db.init_app(app)
    
    from backend.controllers.skill_controller import skills_bp
    from backend.controllers.user_controller import users_bp
    from backend.controllers.auth.auth import login_bp
    from backend.controllers.auth.signup import signup_bp
    
    app.register_blueprint(skills_bp)
    app.register_blueprint(users_bp)
    app.register_blueprint(login_bp)
    app.register_blueprint(signup_bp)
    
    with app.app_context():
        db.create_all()
    
    return app
