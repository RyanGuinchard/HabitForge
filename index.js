require("dotenv").config();
const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT
const authRoutes = require("./routes/auth");
const { PrismaClient } = require("@prisma/client");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

app.use("/auth", authRoutes);

app.listen(PORT, ()=> {
    console.log(`Server is listening on port ${PORT}`);
})
