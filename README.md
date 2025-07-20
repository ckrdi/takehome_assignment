# MEVN Fullstack Take Home Assignment

A fullstack web application built using Vue 2, Express.js, and MongoDB to demonstrate authentication, user management, and clean architectural patterns.

---

## Tech Stack

| Layer     | Technology                            |
|-----------|---------------------------------------|
| Frontend  | Vue 2, Vue Router, Axios, Bootstrap 4 |
| Backend   | Node.js, Express.js, MongoDB, JWT     |

---

## Project Structure
takehome_assignment/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── seed/
│   ├── .env.example
│   ├── .gitignore
│   ├── app.js
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── router/
│   │   ├── services/
│   │   ├── views/
│   │   ├── App.vue
│   │   └── main.js
│   ├── .env.example
│   ├── .gitignore
│   ├── babel.config.js
│   ├── jsconfig.json
│   ├── package.json
│   └── vue.config.js
└── README.md

---

## Authentication Endpoints

| Method | Endpoint      | Description                 |
|--------|---------------|-----------------------------|
| POST   | `/api/login`  | Login with email & password |
| GET    | `/api/me`     | Returns logged-in user info |

**Token Format**: Bearer Token (JWT) stored in `localStorage`

**Example Request:**

```json
POST /api/login
{
  "email": "admin@example.com",
  "password": "admin123"
}
=>
{
  "token": "jwt.token.here",
  "user": {
    "id": "...abc",
    "name": "Admin",
    "email": "admin@example.com",
    "status": "Active"
  }
}
```

```json
GET /api/me
{
  "user": {
    "_id": "...abc",
    "name": "Admin",
    "email": "admin@example.com",
    "status": "Active"
  }
}
```

---

## User Management Endpoints

| Method | Endpoint           | Description            |
|--------|--------------------|------------------------|
| GET    | `/api/users`       | Get all users          |
| GET    | `/api/users/:id`   | Get user by ID         |
| POST   | `/api/users`       | Create new user        |
| PUT    | `/api/users/:id`   | Update user by ID      |
| DELETE | `/api/users/:id`   | Delete user by ID      |

**Token Format**: Bearer Token (JWT) stored in `localStorage`

**Example Request:**

```json
GET /api/users
[
  {
    "_id": "abc",
    "name": "User 1",
    "email": "user1@example.com",
    "status": "Active"
  },
  {
    "_id": "def",
    "name": "User 2",
    "email": "user2@example.com",
    "status": "Active"
  },
]
```

```json
GET /api/users/abc
{
  "_id": "abc",
  "name": "User 1",
  "email": "user1@example.com",
  "status": "Active"
}
```

```json
POST /api/users
{
  "name": "User 3",
  "email": "user3@example.com",
  "status": "Active",
  "password": "password"
}
=>
{
  "_id": "ghi",
  "name": "User 3",
  "email": "user3@example.com",
  "status": "Active"
}
```

```json
PUT /api/users/ghi
{
  "name": "User 5",
  "email": "user5@example.com",
  "status": "Not Active"
}
=>
{
  "_id": "ghi",
  "name": "User 5",
  "email": "user5@example.com",
  "status": "Not Active"
}
```

```json
DELETE /api/users/ghi
{
    "message": "User has been deleted"
}
```

---

## Frontend Pages

| Route        | View               | Purpose                              |
|--------------|--------------------|--------------------------------------|
| `/login`     | Login.vue          | Login screen                         |
| `/`          | UserDashboard.vue  | Total users summary                  |
| `/users`     | UserList.vue       | User list                            |
| `/users/add` | UserAdd.vue        | User create form                     |
| `/users/:id` | UserDetail.vue     | User edit form                       |

---

## Features

- JWT-based Authentication
- MongoDB Data Persistence
- Responsive UI based on PNG mockups
- Fully documented API & modular codebase

---

## Getting Started

### 1. Clone the repo
```sh
git clone https://github.com/ckrdi/takehome_assignment.git
```

### 2. Change directory to backend
```sh
cd backend
```

### 3. Create new .env file
```sh
MONGO_URI="your_mongo_uri"
JWT_SECRET="your_super_secret_jwt_secret"
PORT="your_port"
```

### 4. Run the backend
```sh
npm i
node seed/admin.js
node app.js
```

### 5. Open new terminal, change directory to frontend
```sh
cd frontend
```

### 6. Create new .env.local file
```sh
VUE_APP_API="your_backend_api_url"
```

### 7. Run the frontend
```sh
npm i
npm run serve
```

---

## Example Admin User

| Field     | Value              |
|-----------|--------------------|
| Email     | admin@example.com  |
| Password  | password           |
