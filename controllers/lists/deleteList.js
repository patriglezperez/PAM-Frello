const context = require("../../models/Context");

function deleteList(req, res) {
  const contextList = context.getContextList();
  const newContext = contextList.map((element) => element.id !== req.params.id);
  context.setContextList(newContext);
  res.json({ message: "deleted" });
}

module.exports = deleteList;
