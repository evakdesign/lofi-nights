//This imports router from express.
const router = require("express").Router();
//This imports bcrypt.
const bcrypt = require("bcrypt");
//This is destructuring staff from models.
const { Staff } = require("../../models");

router.post("/", async (req, res) => {
  try {
    //create makes a new record in the Staff table
    const dbUserData = await Staff.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      rolesID: 1,  
    });
    // res.status(200).json(dbUserData);
    //This creates the session properties on the req object. Here the users session is updated.
    req.session.save(() => {
      req.session.loggedIn = true;
      //TODO : Update this, don't save password in session.
      req.session.user = dbUserData;
      //TODO : Update this, don't send password to the client.
      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
//This looks for a matching email in the database.
router.post("/login", async (req, res) => {
  try {
    const dbUserData = await Staff.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!dbUserData) {
      res
      //unauthoized access error is displayed if requests fail.
        .status(401)
        .json({ message: "Incorrect email or password. Please try again" });
      return;
    }

    // const validPassword = await dbUserData.checkPassword(req.body.password);

    // if (!validPassword) {
    //   res
    //     .status(400)
    //     .json({ message: "Incorrect email or password. Please try again." });
    //   return;
    // }
    //Saves the content in an in memory database through the session.
    req.session.save(() => {
      req.session.user = dbUserData;
      req.session.loggedIn = true;
      //200 means that the response is okay.
      res.status(200).json({ user: dbUserData, message: "You are now logged in" });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
//This logs you out of the site by destroying the session.
router.post("/logout", (req, res) => {
  req.session.destroy(() => { 
  });
  res.status(204).json({message:"logged out"}).end();
});

module.exports = router;
