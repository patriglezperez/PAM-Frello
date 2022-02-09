var router = require("express").Router();

//Obtener un tablero
// router.get("/:id", require("../controllers/board/getBoard"));

router.post("/:id", require("../controllers/board/createBoard"));

router.delete("/:id", require("../controllers/board/deleteBoard"));

//Obtener listas en un tablero
router.get("/:id", require("../controllers/board/getLists"));

//Actualizar un tablero
router.patch("/:id", require("../controllers/board/updateBoard"));

//Crear lista en un tablero
// router.post("/:id", require("../controllers/board/createList"));
router.use("/", require("../routes/lists"));

module.exports = router;
