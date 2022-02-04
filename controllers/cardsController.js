const cards = require("../models/card/card");

function cardsController(req, res) {
  console.log(cards);
  res.json({ cards });
}
module.exports = cardsController;
