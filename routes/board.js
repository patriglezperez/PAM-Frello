var router = require("express").Router();

//Obtener todos los tableros de una organizacion
router.get("/:id/organization", require("../controllers/board/getBoard"));

//Crear un tablero
router.post("/:id", require("../controllers/board/createBoard"));

//Borrar un tablero
router.delete("/:id", require("../controllers/board/deleteBoard"));

//Obtener listas en un tablero
router.get("/list/:id", require("../controllers/board/getLists"));

//Actualizar un tablero
router.patch("/:id", require("../controllers/board/updateBoard"));

//Crear lista en un tablero
router.post("/create/:id", require("../controllers/board/createList"));

module.exports = router;
