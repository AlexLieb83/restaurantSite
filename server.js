const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

//middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(express.static("public"));

//connect to mongoDB
mongoose.connect(process.env.DB_STRING);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// schema and model for form data
const reservationSchema = new mongoose.Schema({
  name: String,
  people: Number,
  date: Date,
  specialReq: String,
});

const Reservation = mongoose.model("Reservation", reservationSchema);

//handle form submission reqs
app.post("/submit", async (req, res) => {
  const formData = {
    name: req.body.Name,
    people: req.body.People,
    date: new Date(req.body.Date),
    specialReq: req.body.SpecialReq,
  };

  try {
    const newReservation = new Reservation(formData);
    await newReservation.save();
    res.redirect("/?success");
  } catch (error) {
    res.redirect("/?error");
  }
});

app.get("/", (req, res) => {
  res.render("index.html");
});

//connect to server
const PORT = 3005;
app.listen(PORT, () => {
  console.log(`Server connected on port ${PORT}`);
});
