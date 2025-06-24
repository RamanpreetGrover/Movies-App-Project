# 🎬 Movies App – CPAN 212 Final Project

## Group 2  
**Members**:  
- Ramanpreet Grover  
- Sahib Soor  
- Sidarth Verma

---

## 📌 Project Overview

A full-stack Movie Management web application built using Express.js and Pug.  
The app supports movie listing, adding, editing, viewing details, and deleting records.  
MongoDB integration, authentication, and route protection will be added in future phases.

---

## ✅ Phase 1 – Planning & Flow

- 🎯 Objective defined: CRUD app with user registration, login, session-based access, and ownership-based restrictions
- ✅ Flowchart created showing user journey: Register → Login → View/Add/Edit/Delete Movie → Logout
- 👥 Team roles assigned: Team Leader, Flowchart Designer, Task Coordinator, Documentation Lead

---

## ✅ Phase 2 – Implementation (Without Database)

- 🔧 Set up Express app with Pug as templating engine
- 🗂️ Modular routing using `routes/movies.js`
- 💾 In-memory movie storage (JavaScript array)
- 📝 Forms with validation (Name and Year required)
- 🧾 Pages:
  - Home page (movie listing)
  - Add movie form
  - Edit movie form (pre-filled)
  - View movie details
- 🖼️ Bootstrap UI for styling
- ✅ Tested in Postman and browser

---

## 🚧 Phase 3 – Authentication (Coming Soon)

- [ ] Registration and Login functionality
- [ ] Logout mechanism
- [ ] Session-based authentication
- [ ] Route restrictions for Add/Edit/Delete

---

## 🚧 Phase 4 – MongoDB & Deployment (Coming Soon)

- [ ] Replace in-memory array with MongoDB
- [ ] Use Mongoose models
- [ ] Deploy app to Heroku

---

## 🚀 How to Run

```bash
git clone https://github.com/RamanpreetGrover/Movies-App-Project.git
cd Movies-App-Project
npm install
npm run dev
