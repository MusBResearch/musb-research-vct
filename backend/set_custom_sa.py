
import asyncio
import bcrypt
from datetime import datetime, timezone
from motor.motor_asyncio import AsyncIOMotorClient
import os
from dotenv import load_dotenv
from app.utils.security import encrypt_data

load_dotenv()

async def create_custom_sa():
    MONGO_URL = os.getenv("DATABASE_URL", "mongodb://localhost:27017")
    DB_NAME   = os.getenv("DATABASE_NAME", "musb_research")
    
    client = AsyncIOMotorClient(MONGO_URL)
    db = client[DB_NAME]
    
    email = "brijeshraj6342@gmail.com"
    password = "Brijesh@123456"
    name = "Brijesh Raj"
    
    hashed = bcrypt.hashpw(password.encode("utf-8"), bcrypt.gensalt()).decode("utf-8")
    now = datetime.now(timezone.utc)
    
    # Check if user exists
    existing = await db["users"].find_one({"email": email})
    
    if existing:
        print(f"User {email} already exists. Updating credentials and role...")
        await db["users"].update_one(
            {"_id": existing["_id"]},
            {"$set": {
                "passwordHash": hashed,
                "role": "SUPER_ADMIN",
                "name": encrypt_data(name),
                "updatedAt": now,
                "emailVerified": now
            }}
        )
        print("✅ User updated to SUPER_ADMIN.")
    else:
        print(f"Creating new user {email}...")
        user_doc = {
            "name": encrypt_data(name),
            "email": email,
            "passwordHash": hashed,
            "role": "SUPER_ADMIN",
            "emailVerified": now,
            "createdAt": now,
            "updatedAt": now
        }
        await db["users"].insert_one(user_doc)
        print("✅ New SUPER_ADMIN created.")
    
    client.close()

if __name__ == "__main__":
    asyncio.run(create_custom_sa())
