const { v4: uuidv4 } = require('uuid');

const organization = {
    ID: uuidv4(),
    Name: "PAM Workspace",
    DisplayName: "PAM Workspace",
    IDmemberCreator: uuidv4(),
    URL:"/PENES",
    IDboards: uuidv4(),
    membership: uuidv4(),
}

const context = {
    organizations:[organization]
}

module.exports = context