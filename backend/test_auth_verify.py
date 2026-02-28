
import asyncio
import bcrypt
from motor.motor_asyncio import AsyncIOMotorClient
import os
from dotenv import load_dotenv

load_dotenv()

def verify_password(plain_password: str, hashed_password: str) -> bool:
    try:
        return bcrypt.checkpw(plain_password.encode("utf-8"), hashed_password.encode("utf-8"))
    except Exception as e:
        print(f"Error during verification: {e}")
        return False

async def test_auth():
    MONGO_URL = os.getenv("DATABASE_URL", "mongodb://localhost:27017")
    DB_NAME   = os.getenv("DATABASE_NAME", "musb_research")
    
    client = AsyncIOMotorClient(MONGO_URL)
    db = client[DB_NAME]
    
    email = "superadmin@musbresearch.com"
    password = "SuperAdmin@2026!"
    
    user = await db["users"].find_one({"email": email})
    
    if user:
        hp = user.get("passwordHash", "")
        print(f"User hash: {hp}")
        is_ok = verify_password(password, hp)
        print(f"Verification result: {is_ok}")
    else:
        print("User not found")
    
    client.close()

if __name__ == "__main__":
    asyncio.run(test_auth())
