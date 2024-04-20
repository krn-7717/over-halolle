from backend import db

class Skill(db.Model):
    __tablename__ = 'skills'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    skill = db.Column(db.String(100))
    color = db.Column(db.String(100))
