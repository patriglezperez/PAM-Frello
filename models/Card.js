const Panel = require("./Panel");

class Card extends Panel {
  constructor(name, idList) {
    super(name, idList, "BOT");
    this.desc = "desc"; //descripción
    this.dateLastActivity = "dateLastActivity;";
    this.url = "/Card/" + this.id;
  }

  setDesc(desc) {
    this.desc = desc;
  }
}
module.exports = Card;
