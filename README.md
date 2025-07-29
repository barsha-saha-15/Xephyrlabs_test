
#  Blogpoint

**Blogpoint** is a full-stack blogging platform where users can write blog posts, check grammar using **Gemini AI**, and publish them. Users can also view and manage their own blogs, see all public blogs from others, and perform secure authentication using JWT. The project is built with **Next.js**, **Tailwind CSS**, **Express.js**, **Prisma**, and **PostgreSQL (via pgAdmin 4)**.

---
##  What You Can Do with Blogpoint

-  Write blog posts using a rich editor
-  Fix grammar using **Gemini AI**
-  Securely sign up / log in
-  View your own blog posts
-  Browse all users’ blogs
-  Update or  delete your own posts
-  Logout securely

---

##  Project Setup

###  Prerequisites

Ensure the following are installed:

- **Node.js**: v18 or higher
- **PostgreSQL** (use **pgAdmin 4** for GUI)
- **npm** 
- **Gemini API key** (for grammar correction)

---

###  Project Structure

```
blogpoint/
├── backend/         # Express + Prisma + JWT + PostgreSQL
├── frontend/        # Next.js + Tailwind CSS
└── README.md
```

---

### 🔄 Clone the Repository

```bash
git clone https://github.com/barsha-saha-15/Xephyrlabs_test
```

---

## ▶ How to Run Locally

###  Frontend (Next.js + Tailwind CSS)

```bash
cd frontend
npm install
npm run dev
```

Runs at: `http://localhost:3000`

---

###  Backend (Express.js + Prisma + pgAdmin4)

```bash
cd backend
npm install

# Configure .env file:
DATABASE_URL="Your_Key"
JWT_SECRET=your_key
GEMINI_API_KEY=your_key

# Prisma setup
npx prisma generate
npx prisma migrate dev --name userModel init

# Start server
npm run dev
```

Runs at: `http://localhost:5000`

---

##  Authentication

- Used **JWT token**
- Stored on **sessionStorage**
- Auth middleware used to protect private routes

---

##  API Endpoints & Examples

> All protected routes require:  
`Authorization: Bearer <JWT_TOKEN>`  
`Content-Type: application/json`

### Signup

```bash
POST /auth/register
{
  "email": "user@example.com",
  "password": "password123"
}
```

###  Login

```bash
POST /auth/login
{
  "email": "user@example.com",
  "password": "password123"
}
```

---

###  Add Blog Post

```bash
POST /user/add
{
  "content": "Blog content here..."
}
```

###  Grammar Check with Gemini

```bash
POST /user/check
{
  "content": "your raw blog text"
}
```

###  Get Your Posts

```bash
GET /user/home
```

###  Get All Users’ Posts

```bash
GET /user/allPost
```

###  Update a Post

```bash
PUT /user/update/:id
{
  "content": "updated blog content"
}
```

###  Delete a Post

```bash
DELETE /user/delete/:id
```

---

##  Main Pages (Frontend)

| Page        | Route         | Description                                                  |
|-------------|---------------|--------------------------------------------------------------|
| **Login**   | `/login`      | User login page                                              |
| **Signup**  | `/register`     | Create new account                                           |
| **Add**     | `/add`        | Write blog, check grammar, and post                         |
| **Home**    | `/home`           | See your own posts                                           |
| **Showcase**| `/showcase`   | See all users' blogs                                         |
| **Update**  | `/update/:id` | Update a specific blog post                                  |
| **Logout**  | -             | Clears session and redirects to login                       |

---
## Deployment Info

| Layer     | Platform                                  |
|-----------|-------------------------------------------|
| Frontend  | [Vercel](https://xephyrlabs-test.vercel.app/)             |
| Backend   | [Render]            |
| Database  | [Supabase]    |
---
##  Future Enhancements

-  AI-based title suggestion
-  Blog search feature
-  Comments and Likes
-  Draft-saving and scheduled posting

---

## Tech Stack

| Layer        | Technologies                         |
|--------------|--------------------------------------|
| Frontend     | Next.js, Tailwind CSS, Axios         |
| Backend      | Express.js, Prisma ORM               |
| Auth         | JWT + bcrypt                         |
| Grammar Fix  | Gemini AI                            |
| DB           | PostgreSQL (via pgAdmin 4)           |
| Deployment   | Vercel (FE) + Render   |

---

## Contact

Feel free to connect with me:

-  Email: barshasaha222@gmail.com
-  GitHub: [barsha saha](https://github.com/barsha-saha-15)
-  LinkedIn: [Your Name](https://www.linkedin.com/in/barsha-saha-1a81932a2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app)

---

##  Future Enhancements

Here are some advanced features that can be added to improve **Blogpoint**:

- *AI-based title & summary generation** using Gemini
- *Like, comment, and reply system**
- *User profile pages** with profile picture and bio
- *Rich text editor** with formatting options (bold, italic, code blocks, etc.)
- *Post scheduling & drafts**
- *Notifications** for post interactions
- *Analytics Dashboard** for authors (views, likes, comments)
- *Image/file upload** with blog posts

---
