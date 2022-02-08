var router = require("express").Router();

router.use("/organizations", require("./organizations"));
router.use("/board", require("./board"));
router.use("/lists", require("./lists"));

module.exports = router;
