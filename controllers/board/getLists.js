const context = require("../../models/Context");

function getLists(req, res) {
  let listIDS = [];
  const allBoards = context.getContextBoard();

  //Realizo una búsqueda de los tableros con su id
  allBoards.filter((element) => {
    if (element.id === req.params.id) {
      //Obtengo los ids de los tableros
      listIDS = element.getList();
    }
  });

  //Ahora con el tablero encontrado, traigo las listas
  const allLists = context.getContextList();

  //Realizo un map del arr de ids y dentro utilizo un find en todas las listas
  //Dentro del find le digo que me retorne si el id del elemento es igual al id que contiene el arr sobre el que hago map

  if(allLists.length > 0 && listIDS.length > 0){
    const response = listIDS.map((ids) =>
    allLists.find((element) => element.id === ids)
  );
    res.status(200).json(response)
  }else{
    res
    .status(404)
    .json({ message: "Este tablero no tiene listas" });
  }
  

  
}

module.exports = getLists;
