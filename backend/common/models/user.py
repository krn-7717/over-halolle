from backend import db
from backend.common.models.user_skill import UserSkill

class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(100))
    email = db.Column(db.String(100))
    password = db.Column(db.String(100))
    github = db.Column(db.String(100))
    qiita = db.Column(db.String(100))
    zenn = db.Column(db.String(100))
    create_at = db.Column(db.String(100))
    updated_at = db.Column(db.String(100))
    user_skill = db.relationship("UserSkill")
