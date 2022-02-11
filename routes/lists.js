var router = require("express")();

//Actualizar Lista
router.put("/:id", require("../controllers/lists/updateList"));

//Obtener tarjetas
router.get("/:id", require("../controllers/lists/getCards"));

//Archivar o borrar Lista
router.delete("/:id", require("../controllers/lists/deleteList"));

//Crear una lista en un tablero
router.post("/:id", require("../controllers/board/createList"));

module.exports = router;
