from backend import db

from backend.utils.color import search_color


class UserSkill(db.Model):
    __tablename__ = 'user_skills'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    skill = db.Column(db.String(100))
    level = db.Column(db.Integer)
    color = db.Column(db.String(100))
    create_at = db.Column(db.String(100))
    updated_at = db.Column(db.String(100))
    
    @staticmethod
    def get_all(id):
        return UserSkill.query.filter(UserSkill.user_id==id).all()
    
    @staticmethod
    def get_by_id(id):
        return UserSkill.query.filter(UserSkill.user_id==id).all()
    
    @staticmethod
    def create(id, skill, level):
        new_skill = UserSkill()
        new_skill.user_id = id
        new_skill.skill = skill
        new_skill.level = level
        new_skill.color = search_color(skill)
        db.session.add(new_skill)
        db.session.commit()
        return new_skill
