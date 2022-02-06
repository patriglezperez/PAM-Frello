const context = require('../../models/Context')

function updateList(req, res) {
    const newContext = context.getContextList().map(element => {
        if (element.id === req.params.id) {
            element.setName(req.query.name)
        }
        return element
    })

    context.setContextList(newContext)
    res.status(200).json({ message: "modificado" })
}

module.exports = updateList