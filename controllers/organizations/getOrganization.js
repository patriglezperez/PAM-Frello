const context = require("../../models/Context");

function getOrganization(req, res) {
  const contextOrganizations = context.getContextOrganization();
<<<<<<< HEAD
  const selected = contextOrganizations.filter(
    (element) => element.id === req.params.id
  );
  res.status(200).json(selected);
=======
  const selected = contextOrganizations.filter(element => element.id === req.params.id)
  res.status(200).json(selected)
>>>>>>> e52bd2e54e95face4be8466f5e01b4d682aa2e48
}

module.exports = getOrganization;
