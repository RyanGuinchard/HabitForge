require("dotenv").config();
const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT

const app = express();


app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send("Welcome to HabitForge API");
});

app.listen(PORT, ()=> {
    console.log(`Server is listening on port ${PORT}`);
})
