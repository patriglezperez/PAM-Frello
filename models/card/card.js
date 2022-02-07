const { v4: uuidv4 } = require("uuid");

class Card {
  constructor(idList, name) {
    this.name = name;
    this.desc = "desc"; //descripción
    this.dateLastActivity = "dateLastActivity;";
    this.id = uuidv4(); //id que creamos aleatorio
    this.idList = idList; //id que recibimos de list
    this.idBoard = "idBoard";
    this.url = "url";
  }

  addCard(card) {
    this.contextCard.push(card);
  }

  setName(name) {
    this.name = name;
  }
  setDesc(desc) {
    this.desc = desc;
  }
}
module.exports = Card;
