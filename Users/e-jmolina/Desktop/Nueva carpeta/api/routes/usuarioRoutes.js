const express = require('express');
var usuarioController = require("./../controller/usuarioController");

var router = express.Router();

router.get("/usuario", usuarioController.index);

router.post("/usuario", usuarioController.guardar);

router.get("/usuario/:id", usuarioController.ver);

router.put("/usuario/:id", usuarioController.modificar);

router.delete("/usuario/:id", usuarioController.eliminar);

;
router.post("/login", usuarioController.login)

module.exports = router;