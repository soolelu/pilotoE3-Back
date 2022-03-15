const { check } = require("express-validator");
const {
  clientPasswordRequired,
  clientEmailRequired,
} = require("../helpers/constants");
const { validateResult } = require("../helpers/validators");

const validCreateUpUsuario = [
  check("password").not().isEmpty().withMessage(clientPasswordRequired),
  check("email").not().isEmpty().withMessage(clientEmailRequired),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

module.exports = { validCreateUpUsuario };
