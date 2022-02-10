const { v4: uuidv4 } = require("uuid");

class Panel {
  constructor(name, idContainer, type) {
    this.id = type === "TOP" ? idContainer : uuidv4();
    this.name = name;
    this.idContainer = idContainer;
    this.idList = [];
    type === "BOT" ? delete this.idList : null;
    type === "TOP" ? delete this.idContainer : null;
  }

  setName(name) {
    this.name = name;
  }

  getList() {
    return this.idList;
  }

  addID(id) {
    this.idList.push(id);
  }

  deleteID(id) {
    const newList = this.idList.filter((element) => element.id !== id);
    this.setList(newList);
  }

  setList(newList) {
    console.log(newList);
    this.idList = newList;
  }
}

module.exports = Panel;
