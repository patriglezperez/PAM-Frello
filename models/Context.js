const Organization = require("./Organization");
const Card = require("./card/card");
const List = require("./List");

class Context {
  constructor() {
    (this.contextOrganization = []),
      (this.contextBoard = []),
      (this.contextList = []),
      (this.contextCard = []);
  }

  addOrganization(organization) {
    this.contextOrganization.push(organization);
  }

  addBoard(board) {
    this.contextBoard.push(board);
  }

  addList(list) {
    this.contextList.push(list);
  }

  addCard(card) {
    this.contextCard.push(card);
  }

  deleteOrganization(id) {
    const newContext = this.contextOrganization.map(
      (element) => element.id !== id
    );
    this.setContextOrganization(newContext);
  }

  deleteBoard(id) {
    const newContext = this.contextBoard.map((element) => element.id !== id);
    this.setContextBoard(newContext);
  }

  deleteList(id) {
    const newContext = this.contextList.map((element) => element.id !== id);
    this.setContextList(newContext);
  }

  deleteCard(id) {
    const newContext = this.contextCard.map((element) => element.id !== id);
    this.setContextCard(newContext);
  }

  getContextOrganization() {
    return this.contextOrganization;
  }

  getContextBoard() {
    return this.contextBoard;
  }

  getContextList() {
    return this.contextList;
  }

  getContextCard() {
    return this.contextCard;
  }

  setContextOrganization(contextOrganization) {
    this.contextOrganization = contextOrganization;
  }

  setContextBoard(contextBoard) {
    this.contextBoard = contextBoard;
  }

  setContextList(contextList) {
    this.contextList = contextList;
  }

  setContextCard(contextCard) {
    this.contextCard = contextCard;
  }
}

const newContext = new Context();

const firstOrganization = new Organization("pamlohavueltoahacer");
const firstList = new List("Lista de pruebas", 10);
let newCard = new Card();

newContext.addOrganization(firstOrganization);
newContext.addList(firstList);

newContext.addCard(newCard); /*Aqui para crear tarjetas*/

module.exports = newContext;
