
import asyncio
from motor.motor_asyncio import AsyncIOMotorClient
import os
from dotenv import load_dotenv
from app.utils.security import decrypt_data

load_dotenv()

async def check_name():
    MONGO_URL = os.getenv("DATABASE_URL", "mongodb://localhost:27017")
    DB_NAME   = os.getenv("DATABASE_NAME", "musb_research")
    
    client = AsyncIOMotorClient(MONGO_URL)
    db = client[DB_NAME]
    
    email = "superadmin@musbresearch.com"
    user = await db["users"].find_one({"email": email})
    
    if user:
        raw_name = user.get("name")
        print(f"Raw name: {raw_name}")
        try:
            decrypted = decrypt_data(raw_name)
            print(f"Decrypted name: {decrypted}")
        except Exception as e:
            print(f"Decryption failed: {e}")
    else:
        print("User not found")
    
    client.close()

if __name__ == "__main__":
    asyncio.run(check_name())
