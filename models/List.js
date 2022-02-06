const { v4: uuidv4 } = require('uuid');

class List {
    constructor(name, idBoard) {
        this.id = uuidv4(),
            this.name = name,
            this.idBoard = idBoard,
            this.idCards = [];
    }

    setName(name) {
        this.name = name;
    }

    getCards() {
        return this.idCards
    }
}

module.exports = List