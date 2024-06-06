from flask_cors import CORS

from backend import create_app


app = create_app()
CORS(
    app,
    CORS_ALLOW_HEADERS="*",
    CORS_ORIGIN="*",
    CORS_METHODS=["GET", "HEAD", "POST", "OPTIONS", "PUT", "PATCH", "DELETE"],
    CORS_SUPPORTS_CREDENTIALS=True
)

if __name__ == "__main__":
    app.run()
