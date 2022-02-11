const context = require("../../models/Context");

function getBoards(req, res) {
  //Recogemos todos los posibles padres y todos los posibles hijos
  const contextOrganization = context.getContextOrganization();
  const wanted = context.getContextBoard();

  console.log(contextOrganization)

  //Realizo una búsqueda de la organization
  const Father = contextOrganization.find(element => element.id === req.params.id);

  //Tenemos al padre, asi que sacamos su lista
  const ids = Father.getList();

  const response = ids.map(id => {
    return wanted.find(element => element.id === id)
  })

  //Realizo un map del arr de ids y dentro utilizo un find en todas los boards
  //Dentro del find le digo que me retorne si el id del elemento es igual al id que contiene el arr sobre el que hago map

  res
    .status(200)
    .json(
      response.length > 0
        ? response
        : { message: "Este tablero no tiene listas" }
    );
}

module.exports = getBoards;
