var router = require("express")();

//Actualizar Lista
router.post("/:id/mod", require("../controllers/lists/updateList"));

//Obtener tarjetas
router.get("/:id", require("../controllers/lists/getCards"));

//Archivar o borrar Lista
router.delete("/:id", require("../controllers/lists/deleteList"));

//Crear una lista en un tablero
router.post("/:id/lists", require("../controllers/board/createList"));

module.exports = router;
