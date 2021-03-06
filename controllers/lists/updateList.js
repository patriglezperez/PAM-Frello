const context = require("../../models/Context");

function updateList(req, res) {
  let aux = false;
  const newContext = context.getContextList().filter((element) => {
    if (element.id === req.params.id) {
      element.setName(req.query.name);
      aux = true;
    }
    return element;
  });

  context.setContextList(newContext);
  console.log(newContext);
  res
    .status(200)
    .json(aux ? { message: "Modificado" } : { message: "No encontrado" });
}

module.exports = updateList;
