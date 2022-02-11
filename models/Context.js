const Organization = require("./Organization");
const Card = require("./Card");
const List = require("./List");
const Board = require("./Board");

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
    const newContext = this.contextOrganization.filter(
      (element) => element.id !== id
    );
    this.setContextOrganization(newContext);
  }

  deleteBoard(id) {
    const newContext = this.contextBoard.filter((element) => element.id !== id);
    console.log(newContext);
    this.setContextBoard(newContext);
  }

  deleteList(id) {
    const newContext = this.contextList.filter((element) => element.id !== id);
    this.setContextList(newContext);
  }

  deleteCard(id) {
    const newContext = this.contextCard.filter((element) => element.id !== id);
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

//Creamos el contexto
const newContext = new Context();

//Creamos los objetos y los relacionamos entre si bien con los ids
const firstOrganization = new Organization("pamlohavueltoahacer");
const firstBoard = new Board(firstOrganization.id, "Tablero de prueba");
const firstList = new List("Lista de pruebas", firstBoard.id);
const firstCard = new Card("Tarjeta de pruebas", firstList.id);

//Los metemos de referencia, como si se hubiesen creado dinamicamente
firstOrganization.addID(firstBoard.id);
firstBoard.addID(firstList.id);
firstList.addID(firstCard.id);

//Los inyectamos al context creado
newContext.addOrganization(firstOrganization);
newContext.addBoard(firstBoard); /*Aqui para crear tableros*/
newContext.addList(firstList); /*Aqui para crear tableros*/
newContext.addCard(firstCard); /*Aqui para crear tarjetas*/

console.log(newContext)

//Devolvemos el context en el export
//con lo que persistiremos este objeto en memoria
module.exports = newContext;
