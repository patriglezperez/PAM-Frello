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
}

module.exports = board;
