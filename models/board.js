const Panel = require("./Panel");

class Board extends Panel {
  constructor(idOrganization, name) {
    super(name, idOrganization, "MID");
    (this.title = "bla bla bla"),
      (this.Background = "#00000"),
      (this.BackgroundColor = "#00000"),
      (this.Url = "/Board/" + this.id);
  }
}

module.exports = Board;
