const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true })); //this is for urlencoded data (forms)
//app.use(express.json())     //this is for json encoded data
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
