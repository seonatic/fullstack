const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

//User Model
const User = require("../../models/users");

router.get("/test", (req, res) => res.json({ msg: "Users Works" }));

//REGISTRATION PROCESS//
//@route: POST api/users/register
//@description: Register user
//@access: Public

router.post("/register", (req, res) => {
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email Already exists" });
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });

      //hashing password and save user to db

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) console.log(err);
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

//LOGIN PROCESS//
//@route: GET api/users/login
//@description: Return JWT token
//@access: Public

router.post("/login", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email }).then(user => {
    //Check user
    if (!user) {
      return res.status(404).json({ email: "User email not found" });
    }

    //Check password compare user input with hashed password on db (user.password)

    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        //User is matched, we create a payload to pass it to the token

        const payload = { name: user.name, id: user.id };

        //Sign token with payload
        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer" + token
            });
          }
        );
      } else {
        return res.status(400).json({ password: "Password incorrect" });
      }
    });
  });
});

//@route: GET api/users/main
//@description: Return current user
//@access: Private
router.get(
  "/main",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email,
     
    });
  }
);

module.exports = router;
