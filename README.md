# 📝 Blog Website

A full-stack **Blog Website** built with **Next.js**, **Tailwind CSS**, and integrated with a backend for blog management. Admins can add, update, or delete blogs from a secure admin panel. Users can view and read blogs with a smooth UI.

<img width="100%" alt="Blog Screenshot" src="https://github.com/user-attachments/assets/14b6faa4-8cc5-479f-87d8-f5cb5ecd4984" />
# 📝 Full-Stack Blog Website with Admin Panel



---

## ✨ Features

- 📖 Read blogs on the homepage
- 🔒 Admin panel to manage content (create/edit/delete)
- 📬 Email API (e.g., contact form handling)
- ⚡ Fully responsive design using **Tailwind CSS**
- 🚀 Built with modern Next.js App Router

---

## 🧠 Tech Stack

- **Frontend:** Next.js (App Router), Tailwind CSS
- **Backend:** Next.js API Routes (`/api/blog`, `/api/email`)
- **Styling:** Tailwind CSS
- **Data Storage:** JSON or database (you can connect MongoDB, etc.)
- **Deployment:** Vercel (recommended)

---

## 📁 Folder Structure
```
blog-website/
├── app/ # Next.js App Router pages (routing & layout)
│ ├── admin/ # Admin panel interface
│ ├── blog/ # Blog detail pages
│ └── page.tsx # Homepage
│
├── components/ # Reusable UI components
│ ├── Navbar.tsx
│ ├── BlogCard.tsx
│ └── Footer.tsx
│
├── lib/ # Utility functions (e.g., fetchBlog, emailHandler)
│ ├── blog.ts
│ └── email.ts
│
├── public/ # Static assets like images
│
├── api/ # Next.js API routes
│ ├── blog/ # Handles blog CRUD operations
│ └── email/ # Email/contact API endpoint
│
├── .eslintrc.json
├── .gitignore
├── README.md
├── jsconfig.json
├── next.config.mjs
├── package.json
├── package-lock.json
├── postcss.config.mjs
└── tailwind.config.js
```
## Installation & Running Locally
```
git clone https://github.com/yourusername/blog-website.git
cd blog-website
npm install
npm run dev
```




