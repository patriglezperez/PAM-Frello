const { v4: uuidv4 } = require('uuid');

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

module.exports = Organization