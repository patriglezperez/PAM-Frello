const context = require("../../models/Context");

function getBoard(req, res) {
  const contexOrganization = context.getContextBoard();

  const organization = contexOrganization.filter(
    (element) => element.id === req.params.id
  );

  res.status(200).json(organization);
}

module.exports = getBoard;
