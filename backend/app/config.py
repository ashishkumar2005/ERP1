import os
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    SECRET_KEY: str = os.getenv("SECRET_KEY", "your-super-secret-key-change-it")
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60

    # ✅ ACCEPT BOTH ENV VARIABLE NAMES
    MONGODB_URL: str = (
        os.getenv("MONGODB_URL")
        or os.getenv("MONGODB_URI")
        or "mongodb://localhost:27017"
    )

    DATABASE_NAME: str = "edupulse"

settings = Settings()