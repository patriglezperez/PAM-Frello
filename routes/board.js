var router = require("express").Router();

router.get("/:id", require("../controllers/board/getBoard"));

router.post("/:id", require("../controllers/board/createBoard"));

router.delete("/:id", require("../controllers/board/deleteBoard"));

//Obtener listas en un tablero
router.get("/:id", require("../controllers/board/getLists"));
module.exports = router;
