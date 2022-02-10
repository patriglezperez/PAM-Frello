const { v4: uuidv4 } = require("uuid");
const Panel = require("./Panel");

class List extends Panel {
  constructor(name, idBoard) {
    super(name, idBoard, "MID");
    this.idMember = uuidv4();
  }
}

module.exports = List;
