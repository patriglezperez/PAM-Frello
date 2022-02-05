const context = require('../../models/Context')

function getOrganization(req, res) {
    const contextOrganizations = context.getContextOrganization();
    const selected = contextOrganizations.reduce(element => element.id === req.params.id)

    console.log(contextOrganizations)
    console.log(selected)

    res.status(200).json(selected)
}

module.exports = getOrganization