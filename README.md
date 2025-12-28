# BeyondChats – Full Stack Web Developer Intern Assignment

This repository contains my submission for the **BeyondChats Full Stack Web Developer Intern assignment**.  
The project is being developed **phase-wise**, with frequent commits to reflect real-world development workflow.

---

## 🚀 Project Overview

The goal of this project is to:
- Scrape blog articles from the BeyondChats website
- Store them in a database
- Provide CRUD APIs to manage articles
- (Upcoming) Rewrite articles using Google references and LLM
- (Upcoming) Display articles using a React frontend

---

## ✅ Phase 1 – Completed

### 🔹 Features Implemented
- Web scraping of BeyondChats blog articles using **Axios + Cheerio**
- Extraction of:
  - Article title
  - Original article URL
  - Full article content
- Storage of scraped articles in **MongoDB Atlas**
- RESTful CRUD APIs built with **Node.js & Express**
- Data verification using **MongoDB Atlas Data Explorer**

---

## 🛠️ Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Axios
- Cheerio

### Tools
- Git & GitHub
- Postman
- MongoDB Atlas UI

---

## 📂 Project Structure
beyondchats-backend
│
├── models
│ └── Article.js
│
├── routes
│ └── articleRoutes.js
│
├── scraper
│ └── scrapeBlogs.js
│
├── server.js
├── package.json
├── .env (ignored)
└── README.md
