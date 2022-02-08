const context = require("../models/Context");

function addCardsController(req, res) {
  const myCard = req.body;
  // console.log(req.body);
  cards.list.push(myCard);
  res.json("funciona");
}
module.exports = addCardsController;
