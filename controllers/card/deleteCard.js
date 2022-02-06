const context = require("../../models/Context");

function deleteCard(req, res) {
  const contextCard = context.getContextCard();
  const newContext = contextCard.map((card) => card.id !== req.params.id); //Devuelveme todos los elementos que no sean como el del parametro id que estoy pasando
  context.setContextCard(newContext);

  res.json("tarjeta eliminada con éxito");
}
module.exports = deleteCard;
