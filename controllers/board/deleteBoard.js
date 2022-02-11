const context = require("../../models/Context");

function deleteBoard(req, res) {
  //Traemos todos los boards
  const allBoards = context.getContextBoard();
  const allList = context.getContextList();
  const allCards = context.getContextCard();
  let Father = undefined

  //Esto es una solucion vaga, pero bueno
  const comprobacion = allBoards.map((element) => element.id);

  if (comprobacion.includes(req.params.id)) {

    //Encontramos elemento a borrar
    const itemToDelete = allBoards.find(
      (element) => element.id === req.params.id
    );

    //Encontramos al padre de ese elemento
    Father = context
      .getContextOrganization()
      .find((element) => element.id === itemToDelete.idContainer);

    if(Father !== undefined){
      itemToDelete.getList().map(idlist => {
        allList.filter(list => {
          if(list.id === idlist){
            context.deleteList(idlist);
            list.getList().map(idCard => {
              context.deleteCard(idCard)
            })
          }
        })
      })  

      Father.deleteID(itemToDelete.id);
      context.deleteBoard(itemToDelete.id);
      context.deleteOrganization(Father.id);
      context.addOrganization(Father);
    }
    
  }

  /* console.log(context) */

  res.json(
    comprobacion.includes(req.params.id) && Father !== undefined
      ? { message: "deleted" }
      : { message: "Lista no encontrada" }
  );
  console.log(context);
}

module.exports = deleteBoard;
