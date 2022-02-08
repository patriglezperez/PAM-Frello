var router = require("express").Router();

router.get("/:id", require("../controllers/board/getBoard"));
router.post("/:id", require("../controllers/board/createBoard"));
module.exports = router;
