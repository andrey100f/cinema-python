<h1 align="center" style="color: #6DA7D8"> Cinema CRUD Application </h1>

## <span style="color: #6DA7D8"> Project Description

This repository contains the implementation of a **Cinema Management Application**. The project is a full-stack application with a **Django** backend and a **React** frontend, allowing users to perform CRUD operations for managing movies and reservations.

## <span style="color: #6DA7D8"> Getting Started

### Backend (Django):

1. **Install Prerequisites**:
   - Ensure you have Python and pip installed.
2. **Setup Backend**:
   - Clone the repository:
     ```bash
     git clone https://github.com/YourRepo/CinemaCRUD.git
     cd backendbackend
     ```
   - Create a virtual environment and activate it:
     ```bash
     python -m venv env
     env\Scripts\activate
     ```
   - Install dependencies:
     ```bash
     pip install django djangorestframework django-cors-headers mysqlclient
     ```
   - Apply migrations:
     ```bash
     python manage.py makemigrations
     python manage.py migrate
     ```
   - Start the development server:
   ```bash
     python manage.py runserver
   ```
3. **Database Setup**:
   - The backend uses **MySQL** for managing data.
   - Database migrations are managed using **Django's migration system**.

---

### Frontend (React):

1. **Install Node.js**:
   - Ensure you have Node.js and npm installed.
2. **Setup Frontend**:
   - Navigate to the frontend directory:
     ```bash
     cd frontend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the development server:
     ```bash
     npm run dev
     ```

---

## <span style="color: #6DA7D8"> Technologies Used

- **<i>Django</i>**: Backend framework for creating robust and scalable REST APIs.
- **<i>Django REST Framework (DRF)</i>**: Used to build and handle the API endpoints for the backend.
- **<i>React</i>**: Frontend library for creating an interactive user interface.
- **<i>MySQL</i>**: Database used for storing application data.
- **<i>Axios</i>**: Used in the frontend to handle HTTP requests.
- **<i>Bootstrap</i>**: For styling and responsive design in the frontend.

---
