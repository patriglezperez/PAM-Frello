var router = require("express").Router();

router.use("/organizations", require("./organizations"));
router.use("/board", require("./board"));
router.use("/lists", require("./lists"));
router.use("/cards", require("./cards"));

module.exports = router;
