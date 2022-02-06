const context = require("../../models/Context");

function getOrganization(req, res) {
  const contextList = context.getContextList();
  const contextOrganizations = context.getContextOrganization();

  const list = contextList.filter((element) => element.id === req.params.id);
  res.status(200).json(list);
}

module.exports = getOrganization;
