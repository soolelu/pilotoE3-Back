const models = require("../../database/models");
const { httpError, response } = require("../helpers/responses");
const { usuarioNotFound, usuarioDeleted } = require("../helpers/constants.js");
const usuario = require("../../database/models/usuario");

// EP to get all clients
const getUsuarios = async (req, res) => {
  try {
    const getAllUsuarios = await models.usuario.findAll({
      where: {
        statusDelete: false,
      },
    });

    return res.status(200).send(getAllUsuario);
  } catch (error) {
    httpError(res, error);
  }
};

// EP to get client by id
const getUsuarioById = async (req, res) => {
  try {
    const { id } = req.params;

    const getUsuario = await models.usuario.findOne({
      where: {
        id,
        statusDelete: false,
      },
    });

    if (!getUsuario) return res.status(404).send(response(usuarioNotFound));

    return res.status(200).send(getUsuario);
  } catch (error) {
    httpError(res, error);
  }
};

//EP to add client
const addUsuario = async (req, res) => {
  try {
    const { body } = req;

    const usuario = await models.usuario.create({
      email: body.email,
      password: body.password,
      //falta agregar si es empresa, solicitante o admin
    });

    return res.status(200).send(usuario);
  } catch (error) {
    httpError(res, error);
  }
};

//EP to update client
const updateUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;

    const client = await models.usuario.findOne({
      where: {
        id,
        statusDelete: false,
      },
    });

    if (!usuario) return res.status(404).send(response(usuarioNotFound));

    usuario.update({
      email: body.email,
      password: body.password,
    });

    return res.status(200).send(usuario);
  } catch (error) {
    httpError(res, error);
  }
};

//EP to "delete" client in this case is soft delete, change the value statusDelete true
const deleteUsuario = async (req, res) => {
  try {
    const { id } = req.params;

    const usuario = await models.usuario.findOne({
      where: {
        id,
        statusDelete: false,
      },
    });

    if (!usuario) return res.status(404).send(response(usuarioNotFound));

    usuario.update({
      statusDelete: true,
    });

    return res.status(200).send(response(usuarioDeleted));
  } catch (error) {
    httpError(res, error);
  }
};

module.exports = {
  getUsuarios,
  getUsuarioById,
  addUsuario,
  updateUsuario,
  deleteUsuario,
};
