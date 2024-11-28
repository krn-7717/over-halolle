from backend import db
from backend.models.user_skill import UserSkill


class User(db.Model):
    __tablename__ = "users"
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

    @staticmethod
    def get_all():
        return User.query.filter().all()

    @staticmethod
    def get_by_email(email):
        return User.query.filter(User.email == email).first()

    @staticmethod
    def get_by_email_and_password(email, password):
        return User.query.filter(User.email == email, User.password == password).first()

    @staticmethod
    def create(email, password, name="匿名ユーザ"):
        user = User(email=email, password=password, name=name)
        db.session.add(user)
        db.session.commit()
        return user

    @staticmethod
    def rename(id, name):
        user = User.query.filter(User.id == id).first()
        user.name = name
        db.session.commit()
        return user

    @staticmethod
    def delete(id):
        User.query.filter(User.id == id).delete()
        db.session.commit()
