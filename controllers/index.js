const User = require("../models/user");
const passport = require("passport");

module.exports = {
  // register a new user
  async Register(req, res, next) {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      image: req.body.image,
    });

    await User.register(newUser, req.body.password);
    res.redirect("/");
  },

  // login a user
  Login(req, res, next) {
    passport.authenticate("local", {
      successRedirect: "/",
      failureRedirect: "/login",
    })(req, res, next);
  },

  // logout a user
  Logout(req, res, next) {
    req.logout();
    res.redirect("/");
  },
};
