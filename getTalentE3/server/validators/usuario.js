const { check } = require("express-validator");
const {
  usuarioPasswordRequired,
  usuarioEmailRequired,
} = require("../helpers/constants");
const { validateResult } = require("../helpers/validators");

const validCreateUpUsuario = [
  check("password").not().isEmpty().withMessage(usuarioPasswordRequired),
  check("email").not().isEmpty().withMessage(usuarioEmailRequired),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

module.exports = { validCreateUpUsuario };
