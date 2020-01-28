const mongoose = require("mongoose");
// const jwt = require("jsonwebtoken");

const User = require("../models/user");

exports.user_signup = (req, res, next) => {
  const user = new User({
    _id: new mongoose.Types.ObjectId(),
    userName: req.body.userName,
    passWord: req.body.passWord
  });

  user.save().then((response) => {
    res.status(200).json({ msg: response });

  }).catch((error) => {
    console.log('error', error)
    res.status(500).json({ msg: error });
  });

};

exports.user_login = (req, res, next) => {
  res.status(200).json({ msg: "user_login works" })
};

exports.user_delete = (req, res, next) => {
  res.status(200).json({ msg: "user_delete works" })

};
