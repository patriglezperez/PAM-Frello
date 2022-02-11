const context = require("../../models/Context");

function deleteList(req, res) {
  const contextList = context.getContextList();

  const comprobacion = contextList.map((element) => element.id);

  if (comprobacion.includes(req.params.id)) {
    //Encontramos elemento a borrar
    const itemToDelete = contextList.find(
      (element) => element.id === req.params.id
    );

    //Encontramos al padre de ese elemento
    const Father = context
      .getContextBoard()
      .find((element) => element.id === itemToDelete.idContainer);

    /* console.log(itemToDelete.idContainer); */

    itemToDelete.getList().map(idCard => {
      context.deleteCard(idCard)
    })

    Father.deleteID(itemToDelete.id);

    context.deleteList(itemToDelete.id);
    context.deleteBoard(Father.id);
    context.addBoard(Father);
  }

  res.json(
    comprobacion.includes(req.params.id)
      ? { message: "deleted" }
      : { message: "Lista no encontrada" }
  );
  console.log(context);
}

module.exports = deleteList;
