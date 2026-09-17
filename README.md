# Django Customer Management System

A full-stack customer management application built with **Django REST Framework** and **React**, providing RESTful APIs for managing customer records through complete CRUD operations.

## Overview

This project demonstrates the development of a full-stack web application where a React frontend communicates with a Django REST Framework backend through REST APIs.

The application allows users to create, view, update, and delete customer records stored in a SQLite database.

## Features

* Create new customer records
* View all customers
* View individual customer details
* Update existing customer information
* Delete customer records
* RESTful API architecture
* React-based frontend
* SQLite database integration
* Django REST Framework browsable API

## Tech Stack

### Backend

* Python
* Django
* Django REST Framework
* SQLite

### Frontend

* React
* Vite
* Tailwind CSS
* JavaScript

### Development Tools

* Git & GitHub
* VS Code
* Ubuntu/Linux

## Architecture

```text
React Frontend
      │
      │ HTTP Requests
      ▼
Django REST Framework
      │
      ▼
Django Views
      │
      ▼
Customer Model
      │
      ▼
SQLite Database
```

## API Endpoints

| Method | Endpoint                      | Description                  |
| ------ | ----------------------------- | ---------------------------- |
| GET    | `/api/customers/`             | Retrieve all customers       |
| POST   | `/api/customers/`             | Create a new customer        |
| GET    | `/api/customers/<id>/`        | Retrieve a specific customer |
| PUT    | `/api/customers/<id>/`        | Update customer information  |
| DELETE | `/api/customers/delete/<id>/` | Delete a customer            |

## Customer Data Model

Each customer record contains:

* First Name
* Last Name
* Email
* Phone
* Address

## Project Structure

```text
django-customer-management/
│
├── company/
│   ├── models.py
│   ├── views.py
│   ├── serializer.py
│   ├── urls.py
│   └── ...
│
├── mysite/
│   ├── settings.py
│   ├── urls.py
│   └── ...
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
│
├── manage.py
├── requirements.txt
├── .gitignore
└── README.md
```

## How to Run

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/django-customer-management.git
cd django-customer-management
```

### 2. Create and activate a virtual environment

```bash
python3 -m venv myvenv
source myvenv/bin/activate
```

### 3. Install backend dependencies

```bash
pip install -r requirements.txt
```

### 4. Run database migrations

```bash
python manage.py migrate
```

### 5. Start the Django backend

```bash
python manage.py runserver
```

The backend will be available at:

```text
http://127.0.0.1:8000/
```

### 6. Run the React frontend

Open another terminal:

```bash
cd frontend
npm install
npm run dev
```

Vite will provide the local frontend URL in the terminal.

## Learning Outcomes

Through this project, I gained practical experience with:

* Building Django applications
* Designing REST APIs using Django REST Framework
* Implementing CRUD operations
* Working with Django models and serializers
* Connecting a frontend application with backend APIs
* Database operations using SQLite
* Running and developing applications in a Linux/Ubuntu environment
* Managing project dependencies and version control with Git

## Future Improvements

* Authentication and authorization
* Input validation and improved error handling
* Pagination and filtering
* Search functionality
* Production database integration
* Deployment using a cloud platform
* API documentation

## Author

**Durga Tharshini A.**

B.Tech Artificial Intelligence & Data Science

---

If you found this project useful, feel free to explore the repository and its implementation.
