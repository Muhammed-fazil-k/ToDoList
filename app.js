const express = require("express");
const bodyParser = require("body-parser");

let items = [];
let workItems = [];
let route = "/";
let app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  let date = new Date();

  let dayVar = date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    year: "2-digit",
  });
  res.render("index", { title: dayVar, newItems: items });
});
app.post("/", function (req, res) {
  item = req.body.newItem;
  if (req.body.button === "Works") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

app.get("/work", (req, res) => {
  res.render("index", { title: "Works To Do", newItems: workItems });
});

app.get('/about', (req, res) => {
    res.render("about");
})

app.listen(process.env.PORT || 3000, () => {
  console.log("server started at 3000");
});
