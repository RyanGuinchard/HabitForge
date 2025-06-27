# HabitForge API 🛠️

**HabitForge** is a backend REST API built in **Node.js** for tracking personal habits and progress over time. Users can register, create habits, log completions, and query history — all using secure JWT-based authentication and a PostgreSQL database.

---

## 🚀 Features

- ✅ User registration & login with JWT auth
- ✅ Create, update, and delete habits
- ✅ Track habit logs (completion per day)
- ✅ Query habit history (by date range)
- ✅ PostgreSQL database using raw SQL (`pg`)
- ✅ Secure password hashing with bcrypt

---

## 🛠 Tech Stack

| Layer        | Tool                     |
|--------------|--------------------------|
| Server       | Node.js, Express         |
| Database     | PostgreSQL               |
| DB Access    | `pg` (raw SQL queries)   |
| Auth         | JWT (`jsonwebtoken`), `bcryptjs` |
| Dev Tools    | `nodemon`, `dotenv`      |

---