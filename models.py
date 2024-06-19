from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class TriviaQuestion(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    category = db.Column(db.String(100), nullable=False)
    question = db.Column(db.Text, nullable=False)
    options = db.Column(db.JSON, nullable=False)
    answer = db.Column(db.String(255), nullable=False)

    def __repr__(self):
        return f'<TriviaQuestion {self.id}: {self.question}>'
