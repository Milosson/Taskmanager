import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config["SECRET_KEY"] = os.environ.get("SECRET_KEY")

# Check if in development mode
if os.environ.get("DEVELOPMENT") == "True":
    app.config["SQLALCHEMY_DATABASE_URI"] = os.environ.get("DB_URL")
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
else:
    uri = os.environ.get("DATABASE_URL")
    if uri and uri.startswith("postgres://"):
        uri = uri.replace("postgres://", "postgresql://", 1)
    app.config["SQLALCHEMY_DATABASE_URI"] = uri

# Initialize SQLAlchemy
db = SQLAlchemy(app)

# Import routes after initializing db to avoid circular imports
from taskmanager import routes

if __name__ == "__main__":
    app.run()
