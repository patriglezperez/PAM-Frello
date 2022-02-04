const { v4: uuidv4 } = require('uuid');

const organization = {
    ID: uuidv4(),
    Name: "myworkspace70305416",
    DisplayName: "PAM Workspace",
    IDmemberCreator: uuidv4(),
    URL:"/PENES",
    IDboards: [],
    membership: uuidv4(),
}

const context = {
    organizations:[organization]
}

module.exports = context