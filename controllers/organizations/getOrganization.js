const context = require("../../models/Context");

function getOrganization(req, res) {
  const contextOrganizations = context.getContextOrganization();
  const selected = contextOrganizations.filter(
    (element) => element.id === req.params.id
  );
  res.status(200).json(selected);
}

module.exports = getOrganization;
