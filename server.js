const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let journals = [];
let streak = 0;

app.post("/journal", (req, res) => {
  journals.push(req.body);
  streak++;
  res.json({ message: "Entry saved!", streak });
});

app.get("/journal", (req, res) => res.json(journals));
app.get("/streak", (req, res) => res.json({ streak }));

app.listen(5000, () => console.log("MindScribe Simple running on port 5000"));
