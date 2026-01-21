# 🧾 Inventory Management API (Secure CRUD System)

A production-style **Inventory Management Backend** that supports secure CRUD operations using a **multi-container Docker architecture**.  
Designed with **isolation, persistence, automation, and scalability** in mind.

---

## 🚀 Key Features

### 🔐 Secure Architecture
- Only **Nginx** is exposed to the outside world  
- Application and Database run in a **private Docker network**  
- No direct access to backend or database containers  

### 📦 Inventory CRUD Capabilities
- ➕ Add new inventory items  
- 📋 View current inventory levels  
- ✏️ Update quantity and pricing  
- 🗑️ Remove items from inventory  

### 🗄️ Persistent Data Storage
- Uses **PostgreSQL**  
- Data persists across container restarts using **Docker volumes**  

### ⚙️ Automation Ready
- One-command deployment using `deploy.sh`  
- Clean rebuild and restart every time  

### 🐳 Containerized & Portable
- Fully Dockerized  
- Runs consistently across environments  
- Easy to deploy on any Docker-enabled machine  

---

## 🧱 Technology Stack
- **Backend:** Node.js (Express.js)  
- **Database:** PostgreSQL  
- **Reverse Proxy:** Nginx  
- **Containerization:** Docker & Docker Compose  
- **Automation:** Bash (`deploy.sh`)  

---

## 📁 Project Structure

```text
inventory-crud/
│
├── src/               # Application source code
│   └── server.js
│
├── nginx/             # Nginx reverse proxy config
│   └── nginx.conf
│
├── init.sql           # Database initialization
├── Dockerfile         # App container definition
├── docker-compose.yml # Multi-container orchestration
├── deploy.sh          # One-command deployment script
├── .env               # Environment variables
└── README.md
```

## How to Run the Project
### Prerequisites
#### Make sure you have the following installed:
- Docker Desktop
- Docker Compose

#### Verify Installation
```
docker --version
docker compose version
```

### 🚀 Run the Application
From the project root directory:
```
bash deploy.sh
```

## 🌐 Access the API
The system runs through Nginx:
```
http://localhost
```

## INVENTORY MANAGEMENT API DOCS

1. Base URL: http://localhost

All requests are routed through Nginx. The application and database are not directly exposed.

### CREATE INVENTORY ITEM
Endpoint: POST /items

#### Description:
Creates a new inventory item with name, quantity, and price.

Request Body (JSON):
```
{
  "item_name": "Laptop",
  "quantity": 10,
  "price": 55000
}
```
Response (JSON):
```
{
  "id": 1,
  "item_name": "Laptop",
  "quantity": 10,
  "price": 55000
}
```
### GET ALL INVENTORY ITEMS
Endpoint: GET /items

Description: Fetches all inventory items stored in the database.

Response (JSON):
```
[
  {
    "id": 1,
    "item_name": "Laptop",
    "quantity": 10,
    "price": 55000
  }
]
```
### UPDATE INVENTORY ITEM

Endpoint: PUT /items/{id}

Example:
PUT /items/1

Description:
Updates the quantity and/or price of an existing inventory item.

Request Body (JSON):
```
{
  "quantity": 8,
  "price": 52000
}
```

Response (JSON):
```
{
  "message": "Updated"
}
```

### DELETE INVENTORY ITEM
Endpoint:
DELETE /items/{id}

Example:
DELETE /items/1

Description:
Deletes an inventory item by its ID.

Response (JSON):
```
{
  "message": "Deleted"
}
```
### ENVIRONMENT VARIABLES
All sensitive configuration is managed via a .env file.
```
POSTGRES_DB=inventory
POSTGRES_USER=admin
POSTGRES_PASSWORD=admin123

DB_HOST=db
DB_USER=admin
DB_PASSWORD=admin123
DB_NAME=inventory
```
### RESETTING THE DATABASE (OPTIONAL)
Description:
Completely resets the database and re-runs init.sql.

Commands:
docker compose down -v
bash deploy.sh

This will:
- Remove the PostgreSQL volume
- Recreate the database
- Reinitialize tables using init.sql



## ✅ Highlights for Evaluation

- Multi-container Docker architecture
- Reverse proxy using Nginx
- Secure isolation of services
- Persistent storage
- Automated deployment
- Clean and readable API design
- Production-style setup

## Summary
This project demonstrates how to build a secure, containerized backend system with proper isolation, persistence, and automation  closely resembling real-world production deployments.