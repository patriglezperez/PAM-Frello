const { v4: uuidv4 } = require('uuid');

const organization = {
    ID: "pamlohavueltoahacer",
    Name: "myworkspace70305416",
    DisplayName: "PAM Workspace",
    IDmemberCreator: uuidv4(),
    URL: "/PENES",
    IDboards: [],
    membership: uuidv4(),
}

class Organization {
    constructor(id) {
        this.id = id,
            this.name = "Espacio PAM",
            this.DisplayName = "PAM Workspace",
            this.IDmemberCreator = uuidv4(),
            this.URL = "/WorkspacePAM",
            this.idBoards = [],
            this.membership = uuidv4();
    }

    addBoard(board) {
        this.idBoards.push(board)
    }

    deleteBoard(id) {
        const newBoards = this.idBoards.map(element => element.id !== id)
        this.setBoards(newBoards)
    }

    getBoards() {
        return this.idBoards;
    }

    setBoards(boards) {
        this.idBoards = boards
    }
}

module.exports = organization