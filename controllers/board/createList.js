const context = require("../../models/Context");
const List = require("../../models/List");
function createList(req, res) {
  //Buscamos nuestro tablero
  const contextBoard = context
    .getContextBoard()
    .filter((element) => element.id === req.params.idBoard);

  const myBoard = contextBoard.length > 0 ? contextBoard[0] : false; //significa que no ha encontrado ningun elemento y por eso te devuelve false

  //Creamos la lista con su name y el id del padre, generamos su id en el constructor:
  const newList = new List(req.query.name, req.params.id);

  if (myBoard !== false) {
    //Seteamos contexto y el tablero
    context.addList(newList);
    myBoard.addList(newList.id);
    console.log(myBoard);
    console.log(newList);
    //el tablero que tenemos ahora es diferente al que tenemos guardado en el contexto, procedemos a cambiarlo:

    //Borramos la lista previa que habia usando el id guardado
    context.deleteBoard(myBoard.id);
    //Introducimos nuevamente la lista
    context.addBoard(myBoard);
  }
  console.log(context);
  res
    .status(200)
    .json(
      contextBoard
        ? { message: "nueva lista creada" }
        : { message: "Error: No se ha podido crear la lista" }
    );
}
module.exports = createList;
