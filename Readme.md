1. Project Overview

# Scalable REST API with Authentication & Role-Based Access
This project is a secure and scalable backend system built using Node.js, Express, and MongoDB. It includes JWT-based authentication, role-based access control (user vs admin), and CRUD operations for task management. A basic React frontend is included for API interaction and testing.

## Tech Stack

Backend:
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- bcrypt for password hashing
- express-validator for input validation

Frontend:
- React.js
- Axios
- React Router

## Features implemented

- User Registration & Login with hashed passwords
- JWT-based Authentication
- Role-Based Access Control (User & Admin)
- CRUD operations for Tasks
- API Versioning (/api/v1)
- Input Validation
- Protected Routes
- Basic Frontend UI for API interaction

## API Endpoints

Auth:
POST /api/v1/auth/register
POST /api/v1/auth/login

Tasks:
GET /api/v1/tasks
POST /api/v1/tasks
PUT /api/v1/tasks/:id
DELETE /api/v1/tasks/:id

- Users can manage only their own tasks.
- Admin can view and delete all tasks.

## Scalability & Architecture

- Stateless JWT authentication enables horizontal scaling.
- API versioning ensures backward compatibility.
- Modular folder structure allows easy addition of new modules.
- Role-based middleware allows extension to multiple roles.
- MongoDB indexing on user field improves query performance.
- The system can be extended to microservices architecture (separate Auth & Task services).
- Redis caching can be added for frequently accessed endpoints.
- Can be containerized using Docker for cloud deployment.

## Setup Instructions

Backend:
1. Clone repository
2. Navigate to backend folder
3. Install dependencies: npm install
4. Create .env file with:
   MONGO_URL=
   JWT_SECRET=
   PORT=5000
5. Run: npm run dev

Frontend:
1. Navigate to frontend folder
2. Install dependencies: npm install
3. Run: npm run dev