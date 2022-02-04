const context = require('../../models/Organization')

function getOrganization(req,res){
    console.log(req.params.id)
    res.status(200).json(context)
}

module.exports = getOrganization