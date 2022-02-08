const context = require("../../models/Context");

function deleteCard(req, res) {
  let aux = false;
  const contextCard = context.getContextCard();
  const newContext = contextCard.map((element) => element.id == req.params.id);
  newContext.length > 0 ? (aux = true) : (aux = false);
  context.setContextCard(newContext);
  res.json(aux ? { message: "Eliminada" } : { message: "Carta no encontrada" });
}

module.exports = deleteCard;
