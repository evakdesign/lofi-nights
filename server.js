const dotenv = require("dotenv");
dotenv.config()
const express = require("express");
const handlebars = require("express-handlebars");
const session = require("express-session");
const path = require("node:path");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const sequelize = require("./config/connection.js");
const {Shows, Track} = require("./models");
const routes = require("./controllers");
const {handleAuth} = require("./controllers/middleware");
const PORT = process.env.PORT || 3001;
const sequelizeStore = new SequelizeStore({
    db:sequelize
}); 

const app = express();
app.use(express.json());
//Middleware, makes any file in public folder static. No dynamic data. 
app.use(express.static(path.join(__dirname, "public")));

app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");
app.set("views", "./views");
app.use(session({
    secret:process.env.SESSION_SECRET,
    store:sequelizeStore,
    resave:false
}))

app.use(routes);
app.get("/checkAuth", handleAuth,(req,res)=>{
    res.json({
        auth:true,
        user:req.session.user
    })
}) 
app.get("/",(req, res) => {
    res.status(301).redirect("/home");
});
app.get("/home",(req, res) => {
    res.render("home")
});

const runServer = async () => {
    await sequelizeStore.sync();
    // await Staff.sync();
    // await Role.sync();
    // await Shows.sync();
    // await Track.sync();
    Track.belongsToMany(Shows,{through:"ShowsTrack"});
    Shows.belongsToMany(Track,{through:"ShowsTrack"});
    await sequelize.sync();
    app.listen(PORT, () => {
        console.log("server is listening");
    })
};
runServer()