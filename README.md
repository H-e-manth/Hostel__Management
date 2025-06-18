
# 🏨 Hostel Management System

A full-stack web application built using **Spring Boot** for the backend and **React.js** for the frontend, designed to manage hostel operations including student registration, room allotment, attendance tracking, and user role management (Admin, Faculty, Student).

> ❌ This project does **not** include a fee management system.

---

## 📁 Project Structure

```
Hostel_Management
│
├── Backend
│   ├── Config
│   ├── Controller
│   ├── DTO
│   ├── Models
│   ├── Repository
│   ├── Security
│   └──  Service
│
├── Frontend
│   ├── Components
│   │   ├── Admin
│   │   ├── Attendance
│   │   ├── Auth
│   │   ├── Rooms
│   │   ├── Wardens
│   │   └── Students
│   ├── Pages
│   ├── assets
│   └── App.js
```

---

## ⚙️ Technologies Used

**Backend:**
- Java 17
- Spring Boot
- Spring Security (JWT)
- Maven
- JPA/Hibernate
- MySQL

**Frontend:**
- React.js
- React Router
- JavaScript (ES6+)
- CSS Modules

---

## ✨ Features

- ✅ Student Registration & Profile
- ✅ Room Allotment by Admin
- ✅ Attendance Tracking by Faculty
- ✅ Role-Based Dashboards
- ✅ Secure Authentication with JWT
- ✅ Course & Result Management
- ✅ Responsive UI with React Components

---

## 🔐 User Roles

**Admin:**
- Manage students, faculty, rooms, and courses
- Assign rooms
- Access to full dashboard

**Faculty:**
- Mark and view attendance
- View student details

**Student:**
- View profile, attendance, and room info

---

## 🚀 How to Run the Project

### 📦 Requirements
- Java 17+
- Node.js & npm
- Maven
- MySQL

### 🔧 Backend Setup

```bash
cd Backend
```

1. Update `application.properties`:
   ```
   spring.datasource.url=jdbc:mysql://localhost:3306/hostel_db
   spring.datasource.username=your_db_user
   spring.datasource.password=your_db_password
   spring.jpa.hibernate.ddl-auto=update
   jwt.secret=YourJWTSecretKey
   ```

2. Run the backend:
   ```bash
   mvn spring-boot:run
   ```

### 🌐 Frontend Setup

```bash
cd Frontend
```

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the frontend:
   ```bash
   npm start
   ```

---

## 📸 Screenshots

The system includes:
- Separate folders for Admin, Faculty, Courses, Students
- DTO, Models, Repositories & Services in Spring Boot
- JWT Security Integration
- Clean UI layout with sidebars & header menus

---

## 📌 Known Limitations

- Room duplication checks need enhancement
- No fee/mess management modules
- No PDF/CSV export functionality
- Notifications (email/SMS) not implemented

---

## 🙌 Contributors

Developed by:
**G. Hemanth Kumar and team**  
Internship under **Tekie’s Zen LLC**

---

## 📃 License

This project is open-source and available under the [MIT License](LICENSE).
