const context = require("../../models/Context");

function deleteList(req, res) {
  let aux = false;
  const contextList = context.getContextList();
  const newContext = contextList.map((element) => element.id !== req.params.id);
  newContext.length > 0 ? (aux = true) : (aux = false);
  context.setContextList(newContext);
  res.json(aux ? { message: "deleted" } : { message: "Lista no encontrada" });
}

module.exports = deleteList;
