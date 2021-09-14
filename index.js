const express = require("express");
// const { text } = require("stream/consumers");
const app = express();
const path = require("path");

app.use(express.urlencoded({ extended: true })); //this is for urlencoded data (forms)
app.use(express.json()); //this is for json encoded data
app.set("views", path.join(__dirname, "views")); //Ensures we are using absolute path
app.set("view engine", "ejs");

const comments = [
  {
    username: "Bhasker",
    comment: "hahaha that is so not funny",
  },

  {
    username: "Montana",
    comment: "I like to pretend like I love basketball when really I love soccer",
  },

  {
    username: "Julio",
    comment: "Now, that is really not funny, Montana. Delete your account.",
  },

  {
    username: "Jack",
    comment: "Like always, I have nothing to say",
  },
];

app.get("/comments", (req, res) => {
  res.render("comments/index", { comments });
});

app.get("/tacos", (req, res) => {
  res.send("You are getting /tacos GET response");
});

app.post("/tacos", (req, res) => {
  console.log(req.body);
  const { meat, Qty } = req.body;
  res.send(`You are getting /tacos POST response, and it says: OK! HERE ARE YOUR ${Qty} ${meat} TACOS. ENJOY :) `);
});

app.listen(3000, () => {
  console.log("YOU ARE ON PORT 3000!!!");
});

// CRUD functionality Blueprint

// GET / comments - list all comments //index
// POST / comments - Create a new comments //create
// GET / comments /: id - Get one comment(using ID) //show
// PATCH / comments /: id - Update omne comment //update
// DELETE/comments/:id - Destroy one comment //Delete
