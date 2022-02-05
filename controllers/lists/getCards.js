const context = require('../../models/Context')

function getCards(req, res) {
    let List = "";
    context.getContextList.map(element => {
        if (element.id === req.params.id) {
            List = element
        }
    })
    res.status(200).json(List.getCards())
}

module.exports = getCards