const router = require("express").Router();

router.get("/", require("../controllers/cardsController"));
router.post("/", require("../controllers/addCardsController"));

module.exports = router;
