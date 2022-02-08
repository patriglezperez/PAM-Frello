const context = require("../../models/Context");

function getBoard(req, res) {
  let idBoards = [];
  const contextOrganization = context.getContextOrganization();

  //Realizo busqueda de la lista con su id
  contextOrganization.map((element) => {
    if (element.id === req.params.id) {
      //Obtengo los ids de las cartas
      idBoards = element.getBoards();
    }
  });

  //Ahora con la lista encontrada, traigo las cartas
  const allBoard = context.getContextBoard();

  //Realizo un map del arr de ids y dentro utilizo un find en todas las cartas
  //Dentro del find le digo que me retorne si el id del elemento es igual al id que contiene el arr sobre el que hago map
  const response = idBoards.map((ids) =>
    allBoard.find((element) => element.id === ids)
  );
  console.log("hola");
  res
    .status(200)
    .json(idBoards.length > 0 ? response : { message: "No cards or not List" });
}

module.exports = getBoard;
