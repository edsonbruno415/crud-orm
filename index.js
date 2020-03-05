const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;
const model = require("./models/index");
//Routes
const pessoas = require("./routes/pessoa");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
    res.render("home");
});

app.use("/pessoas", pessoas(model.models));

model.sequelize.sync().then(() => {
    app.listen(port, () => console.log("Application running on ", port));
});