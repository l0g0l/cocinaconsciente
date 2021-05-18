//Comprobar que no existe email duplicado
const db = require('../Models');
const User = db.user




checkDuplicateEmail = (req, res, next) => {
  User.findOne({
    email: req.body.email
  }).exec((err, User) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (User) {
      res.status(400).send({ message: "Este email ya existe" });
      return;
    }
    next();
  });
};

const verifySignUp = {
  checkDuplicateEmail,

};

module.exports = verifySignUp;