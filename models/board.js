const { v4: uuidv4 } = require("uuid");

class board {
  constructor(idOrganization, name) {
    (this.id = uuidv4()),
      (this.title = "bla bla bla"),
      (this.name = name),
      (this.idOrganization = idOrganization),
      (this.Background = "#00000"),
      (this.idLists = []),
      (this.BackgroundColor = "#00000"),
      (this.Url = "/PENE");
  }

  setName(name) {
    this.name = name;
  }

  deleteList(id) {
    const newLists = this.idLists.filter((element) => element.id !== id);
    this.setLists(newLists);
  }

  getBoards() {
    return this.idLists;
  }

  setLists(list) {
    this.idLists = list;
  }

  deleteBoard(id) {
    const newBoards = this.idBoards.map((element) => element.id !== id);
    this.setBoards(newBoards);
  }

  setBoards(boards) {
    //en realidad devuelve al hijo idList
    this.idBoards = boards;
  }

  addList(id) {
    this.idLists.push(id);
  }
}

module.exports = board;
