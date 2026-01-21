#!/bin/bash

echo "🚀 Starting Secure-CRUD deployment..."

# 1. Check Docker
if ! command -v docker &> /dev/null
then
  echo "❌ Docker is not installed."
  exit 1
fi

# 2. Check Docker Compose
if ! docker compose version &> /dev/null
then
  echo "❌ Docker Compose is not available."
  exit 1
fi

echo "✅ Docker and Docker Compose detected"

# 3. Clean existing containers & volumes
echo "🧹 Cleaning previous setup..."
docker compose down -v

# 4. Build & start containers
echo "🐳 Building and starting containers..."
docker compose up --build -d

# 5. Wait for services
echo "⏳ Waiting for services to become healthy..."
sleep 8

# 6. Final success message
echo "✅ [SUCCESS] Application is live at http://localhost"
