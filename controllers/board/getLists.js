const context = require("../../models/Context");

function getLists(req, res) {
  let listIDS = [];
  const contextOrganization = context.getContextOrganization();

  //Realizo una búsqueda de los tableros con su id
  contextOrganization.map((element) => {
    if (element.id === req.params.id) {
      //Obtengo los ids de los tableros
      listIDS = element.getLists();
    }
  });

  //Ahora con el tablero encontrado, traigo las listas
  const allLists = context.getContextList();

  //Realizo un map del arr de ids y dentro utilizo un find en todas las listas
  //Dentro del find le digo que me retorne si el id del elemento es igual al id que contiene el arr sobre el que hago map
  const response = listIDS.map((ids) =>
    allLists.find((element) => element.id === ids)
  );

  res
    .status(200)
    .json(
      listIDS.length > 0
        ? response
        : { message: "Este tablero no tiene listas" }
    );
}

module.exports = getLists;
