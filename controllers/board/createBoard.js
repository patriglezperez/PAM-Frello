const context = require("../../models/Context");
const Board = require("../../models/Board");

function createBoard(req, res) {
  //Buscamos nuestra lista
  const contextOrganization = context
    .getContextOrganization()
    .filter((element) => element.id === req.params.id);

  const myOrganization =
    contextOrganization.length > 0 ? contextOrganization[0] : false;

  //Creamos la carta con su name y el id del padre, generamos su id en el constructor:
  const newBoard = new Board(req.params.id, req.query.name);

  if (myOrganization !== false) {
    //Seteamos contexto y la lista
    context.addBoard(newBoard);
    myOrganization.addID(newBoard.id);
    // console.log(context);
    //La lista que tenemos ahora es diferente a la guardada en el contexto, procedemos a cambiarla:

    //Borramos la lista previa que habia usando el id guardado
    context.deleteOrganization(myOrganization.id);
    //Introducimos nuevamente la lista
    context.addOrganization(myOrganization);
  }

  res
    .status(200)
    .json(
      contextOrganization
        ? { message: "Tablero creado" }
        : { message: "Organizacion no creada" }
    );
}
module.exports = createBoard;
