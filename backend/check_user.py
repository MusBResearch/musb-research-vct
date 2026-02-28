
import asyncio
from motor.motor_asyncio import AsyncIOMotorClient
import os
from dotenv import load_dotenv

load_dotenv()

async def check_user():
    MONGO_URL = os.getenv("DATABASE_URL", "mongodb://localhost:27017")
    DB_NAME   = os.getenv("DATABASE_NAME", "musb_research")
    
    client = AsyncIOMotorClient(MONGO_URL)
    db = client[DB_NAME]
    
    email = "superadmin@musbresearch.com"
    user = await db["users"].find_one({"email": email})
    
    if user:
        print(f"User found: {user['email']}")
        print(f"Role: {user.get('role')}")
        print(f"Has passwordHash: {'Yes' if user.get('passwordHash') else 'No'}")
    else:
        print(f"User {email} NOT found in database {DB_NAME}")
    
    client.close()

if __name__ == "__main__":
    asyncio.run(check_user())
