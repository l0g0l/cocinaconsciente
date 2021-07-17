// Generamos el Token. Buscamos en ls BBDD si existe el email. Comparamos la password contra la BBDD usando bcrypt y si es correcta
const config = require("../Config/auth.config.js");
const db = require("../Models");
const User = db.user;

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
  const user = new User({
    name: req.body.name,
    lastname: req.body.lastname,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 6)
  });
  //Guarda en la BBDD
  user.save((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    res.send({ message: "Usuario registrado correctamente" });
  });
};

exports.login = (req, res) => {
  User.findOne({
    email: req.body.email
  })
    .exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (!user) {
        return res.status(404).send({ message: "Usuario no encontrado" });
      }

      //Comparamos la contraseña introducida con la de la BBDD
      const passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Contraseña incorrecta"
        });
      }
      //Generamos el token y su tiempo de expiración
      const token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });

      res.status(200).send({
        id: user._id,
        email: user.email,
        accessToken: token
      });
    });
};