from flask import Flask
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def create_app():
    app = Flask(__name__)
    app.config.from_object("backend.config.base_setting.Config")
    db.init_app(app)
    
    from backend.controllers.skill_controller import bp
    app.register_blueprint(bp)
    
    with app.app_context():
        db.create_all()
    
    return app
