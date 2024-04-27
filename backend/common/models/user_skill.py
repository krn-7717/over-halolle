from backend import db

class UserSkill(db.Model):
    __tablename__ = 'user_skills'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    skill = db.Column(db.String(100))
    level = db.Column(db.Integer)
    create_at = db.Column(db.DateTime)
    updated_at = db.Column(db.DateTime)
