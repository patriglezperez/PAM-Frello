const context = require("../../models/Context");

function updateCard(req, res) {
  const newContext = context.contextCard().map((card) => {
    if (card.id === req.params.id) {
      card.setName();
    }
    return card;
  });

  context.setContextCard(newContext);
  res.status(200).json({ message: "tarjeta modificada" });
}

module.exports = updateCard;
