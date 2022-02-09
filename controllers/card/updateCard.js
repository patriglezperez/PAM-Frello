const context = require("../../models/Context");

function updateCard(req, res) {
  let aux = false;
  const newContext = context.getContextCard().map((element) => {
    if (element.id === req.params.id) {
      element.setName(req.query.name);
      aux = true;
    }
    return element;
  });

  context.setContextCard(newContext);
  res
    .status(200)
    .json(
      aux
        ? { message: "Tarjeta modificada" }
        : { message: "No se encuentra esa tarjeta" }
    );
}

module.exports = updateCard;
