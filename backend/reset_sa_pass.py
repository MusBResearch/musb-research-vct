
import asyncio
import bcrypt
from datetime import datetime, timezone
from motor.motor_asyncio import AsyncIOMotorClient
import os
from dotenv import load_dotenv

load_dotenv()

async def reset_password():
    MONGO_URL = os.getenv("DATABASE_URL", "mongodb://localhost:27017")
    DB_NAME   = os.getenv("DATABASE_NAME", "musb_research")
    
    client = AsyncIOMotorClient(MONGO_URL)
    db = client[DB_NAME]
    
    email = "superadmin@musbresearch.com"
    password = "SuperAdmin@2026!"
    
    hashed = bcrypt.hashpw(password.encode("utf-8"), bcrypt.gensalt()).decode("utf-8")
    
    result = await db["users"].update_one(
        {"email": email},
        {"$set": {
            "passwordHash": hashed,
            "role": "SUPER_ADMIN",
            "updatedAt": datetime.now(timezone.utc)
        }}
    )
    
    if result.matched_count > 0:
        print(f"✅ Password reset for {email}")
    else:
        print(f"❌ User {email} not found")
    
    client.close()

if __name__ == "__main__":
    asyncio.run(reset_password())
