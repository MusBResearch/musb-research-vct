import asyncio
import motor.motor_asyncio
from datetime import datetime, timezone
import os
import sys

# Add the current directory to sys.path to import app
sys.path.append(os.path.join(os.path.dirname(__file__), "app"))
# Actually, the base directory is backend/
sys.path.append(os.path.dirname(__file__))

from app.config import get_settings

settings = get_settings()

studies_data = []

async def seed():
    print(f"Connecting to: {settings.DATABASE_URL[:25]}...")
    client = motor.motor_asyncio.AsyncIOMotorClient(settings.DATABASE_URL)
    db = client[settings.DATABASE_NAME]
    
    # Clear existing
    await db["studies"].delete_many({})
    print("Cleared existing studies.")
    
    # Insert new
    if studies_data:
        result = await db["studies"].insert_many(studies_data)
        print(f"Inserted {len(result.inserted_ids)} studies.")
    else:
        print("No studies to insert.")
    
    client.close()

if __name__ == "__main__":
    asyncio.run(seed())
