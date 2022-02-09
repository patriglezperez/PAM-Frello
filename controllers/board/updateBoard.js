const context = require("../../models/Context");

function updateBoard(req, res) {
  let aux = false;
  const newContext = context.getContextBoard().map((element) => {
    if (element.id === req.params.id) {
      element.setName(req.query.name);
      aux = true;
    }
    return element;
  });

  context.setContextBoard(newContext);
  res
    .status(200)
    .json(
      aux
        ? { message: "Tablero modificado" }
        : { message: "No se encuentra ese tablero" }
    );
}

module.exports = updateBoard;
