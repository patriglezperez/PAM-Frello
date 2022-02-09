const context = require("../../models/Context");

function getLists(req, res) {
  let BoardsIDS = [];
  const contextBoard = context.getContextBoard();

  //Realizo una busqueda de los tableros con su id
  contextBoard.map((element) => {
    if (element.id === req.params.id) {
      //Obtengo los ids de los tableros
      BoardsIDS = element.getBoards();
    }
  });

  //Ahora con el tablero encontrado, traigo las listas
  const allLists = context.getContextList();

  //Realizo un map del arr de ids y dentro utilizo un find en todas las cartas
  //Dentro del find le digo que me retorne si el id del elemento es igual al id que contiene el arr sobre el que hago map
  const response = BoardsIDS.map((ids) =>
    allLists.find((element) => element.id === ids)
  );

  res
    .status(200)
    .json(
      BoardsIDS.length > 0 ? response : { message: "No cards or not List" }
    );
}

module.exports = getLists;
