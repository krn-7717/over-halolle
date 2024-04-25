from backend import db

class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(100))
    email = db.Column(db.String(100))
    password = db.Column(db.String(100))
    github = db.Column(db.String(100))
    qiita = db.Column(db.String(100))
    zenn = db.Column(db.String(100))
    skill = db.Column(db.String(100))
    level = db.Column(db.Integer)
    create_at = db.Column(db.DateTime)
    updated_at = db.Column(db.DateTime)
