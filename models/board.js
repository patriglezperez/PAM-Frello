const { v4: uuidv4 } = require("uuid");

class board {
  constructor(idOraganization, name) {
    (this.id = uuidv4()),
      (this.title = "bla bla bla"),
      (this.name = name),
      (this.IDorganization = idOraganization),
      (this.Background = "#00000"),

      (this.idLists = []),


      (this.BackgroundColor = "#00000"),
      (this.Url = "/PENE");
  }

  addBoard() {
    return this.board;
  }

  deleteBoard(id) {
    const newBoards = this.idBoards.map((element) => element.id !== id);
    this.setBoards(newBoards);
  }

  getBoards() {
    return this.board;
  }

  setBoards(boards) {
    this.idBoards = boards;
  }
}

module.exports = board;
