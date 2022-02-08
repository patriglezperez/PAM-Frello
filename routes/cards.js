const router = require("express").Router();

//Actualizar una tarjeta
router.patch("/:id", require("../controllers/card/updateCard"));

//Borrar una tarjeta
router.delete("/:id", require("../controllers/card/deleteCard"));

//Crear una tarjeta
router.post(
  "/p",
  require("../controllers/card/createCard")
);

module.exports = router;
