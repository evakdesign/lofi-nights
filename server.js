const express = require("express");
const handlebars = require("express-handlebars");
const path = require("node:path");
const PORT = process.env.PORT || 3001;

const app = express();
//Middleware, makes any file in public folder static. No dynamic data. 
app.use(express.static(path.join(__dirname, "public")));

app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

app.get("/",(req, res) => {
    res.status(301).redirect("/home");
});
app.get("/home",(req, res) => {
    res.render("home")
});

app.listen(PORT, () => {
    console.log("server is listening");
})