const context = require("../../models/Context");

function deleteBoard(req, res) {
  //   const contextOrganization = context.getContextOrganization();
  context.deleteBoard(req.params.id);

  //   context.setContextOrganization(contextOrganization);
  res.json("Board deleted");
}

module.exports = deleteBoard;
