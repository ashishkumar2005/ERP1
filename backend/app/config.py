import os
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    SECRET_KEY: str = os.getenv("SECRET_KEY", "your-super-secret-key-change-it")
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60
    DATABASE_URL: str = os.getenv("DATABASE_URL", "sqlite:///./edupulse.db")
    MONGODB_URL: str = os.getenv("MONGODB_URL", "mongodb+srv://erplogin:erp123@cluster0.uudjq57.mongodb.net/?appName=Cluster0")
    DATABASE_NAME: str = "edupulse"

settings = Settings()
