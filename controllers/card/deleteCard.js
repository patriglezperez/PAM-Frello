const context = require("../../models/Context");

function deleteCard(req, res) {
  const contextCard = context.getContextCard();

  const comprobacion = contextCard.map((element) => element.id);

  if (comprobacion.includes(req.params.id)) {
    //Encontramos elemento a borrar
    const itemToDelete = contextCard.find(
      (element) => element.id === req.params.id
    );

    //Encontramos al padre de ese elemento
    const Father = context
      .getContextList()
      .find((element) => element.id === itemToDelete.idContainer);

    Father.deleteID(itemToDelete.id);

    //Creamos nuevo contexto de boards
    context.deleteCard(itemToDelete.id);
    context.deleteList(Father.id);
    context.addList(Father);

    console.log(context);
  }
  res.json(
    comprobacion.includes(req.params.id)
      ? { message: "deleted" }
      : { message: "Lista no encontrada" }
  );
}

module.exports = deleteCard;
