const express = require("express");
// const { text } = require("stream/consumers");
const app = express();
const path = require("path");
const { v4: uuid } = require("uuid");
// uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

app.use(express.urlencoded({ extended: true })); //this is for urlencoded data (forms)
app.use(express.json()); //this is for json encoded data
app.set("views", path.join(__dirname, "views")); //Ensures we are using absolute path
app.set("view engine", "ejs");

const comments = [
  { id: uuid(), username: "Bhasker", comment: "hahaha that is so not funny" },

  { id: uuid(), username: "Montana", comment: "I like to pretend like I love basketball when really I love soccer" },

  { id: uuid(), username: "Julio", comment: "Now, that is really not funny, Montana. Delete your account." },

  { id: uuid(), username: "Jack", comment: "Like always, I have nothing to say" },
];

app.get("/comments", (req, res) => {
  res.render("comments/index", { comments });
});

app.get("/comments/new", (req, res) => {
  res.render("comments/new");
});

app.post("/comments", (req, res) => {
  console.log(req.body);
  const { username, comment } = req.body;
  comments.push({ username, comment, id: uuid() });
  res.redirect("/comments");
});

app.get("/comments/:id", (req, res) => {
  const { id } = req.params;
  const coment = comments.find((c) => c.id === id);
  res.render("comments/show", { coment });
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
