// const req = require("express/lib/request");
// const res = require("express/lib/response");

let cards = {
  list: [],
};

class Card {
  constructor(name, ID) {
    this.name = name;
    this.desc = "desc"; //descripción
    this.dateLastActivity = "dateLastActivity;";
    this.ID = ID;
    this.idList = "idList";
    this.idBoard = "idBoard";
    this.url = "url";
  }
}
let newCard = new Card();
cards.list.push(newCard);
module.exports = cards;
