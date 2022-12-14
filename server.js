const express = require("express");
const handlebars = require("express-handlebars");
const path = require("node:path");
const sequelize = require("./config/connection");
const api = require("./controllers/api/index")
const PORT = process.env.PORT || 3001;

const app = express();
//Middleware, makes any file in public folder static. No dynamic data. 
app.use(express.static(path.join(__dirname, "public")));

app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

//points api to the index
app.get('/api', api);

app.get("/",(req, res) => {
    res.status(301).redirect("/home");
});
app.get("/home",(req, res) => {
    res.render("home")
});

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log("server is listening");
    });
});
