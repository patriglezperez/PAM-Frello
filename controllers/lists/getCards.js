const context = require("../../models/Context");

function getCards(req, res) {
  let ListIDS = [];
  const contextList = context.getContextList();

  //Realizo busqueda de la lista con su id
  contextList.map((element) => {
    if (element.id === req.params.id) {
      //Obtengo los ids de las cartas
      ListIDS = element.getList();
    }
  });

  //Ahora con la lista encontrada, traigo las cartas
  const allCards = context.getContextCard();

  //Realizo un map del arr de ids y dentro utilizo un find en todas las cartas
  //Dentro del find le digo que me retorne si el id del elemento es igual al id que contiene el arr sobre el que hago map
  const response = ListIDS.map((ids) =>
    allCards.find((element) => element.id === ids)
  );

  res
    .status(200)
    .json(ListIDS.length > 0 ? response : { message: "No cards or not List" });
}

module.exports = getCards;
