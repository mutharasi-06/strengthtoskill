require("dotenv").config({ path: "../.env" });
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const userRoutes = require("./routes/userRoutes");
const quizRoutes = require("./routes/quizRoutes");
const projectRoutes = require("./routes/projectRoutes");
const codeRoutes = require("./routes/codeRoutes");
const aiRoutes = require("./routes/aiRoutes");


const app = express();

const path = require("path");

app.use(cors());
app.use(express.json());

// Serve frontend static files 
app.use(express.static(path.join(__dirname, "../frontend")));
app.use("/hackaton", express.static(path.join(__dirname, "../hackaton")));


// Route root to run.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/run.html"));
});

mongoose.connect("mongodb://localhost:27017/strengthskill")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.use("/users", userRoutes);
app.use("/quiz", quizRoutes);
app.use("/projects", projectRoutes);
app.use("/code", codeRoutes);
app.use("/api/ai", aiRoutes);


app.listen(5000, () => {
  console.log("Server running on port 5000");
});