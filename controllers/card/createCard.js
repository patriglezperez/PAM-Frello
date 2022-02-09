const context = require("../../models/Context");
const Card = require("../../models/card/card");

function createCard(req, res) {
  //Buscamos nuestra lista
  const contextList = context
    .getContextList()
    .filter((element) => element.id === req.query.idList);

  const myList = contextList.length > 0 ? contextList[0] : false;

  //Creamos la carta con su name y el id del padre, generamos su id en el constructor:
  const newCard = new Card(req.query.name, req.query.idList);

  if (myList !== false) {
    //Seteamos contexto y la lista
    context.addCard(newCard);
    myList.addCard(newCard.id);

    //La lista que tenemos ahora es diferente a la guardada en el contexto, procedemos a cambiarla:

    //Borramos la lista previa que habia usando el id guardado
    context.deleteList(myList.id);
    //Introducimos nuevamente la lista
    context.addList(myList);
  }

  /*   console.log(context); */

  res
    .status(200)
    .json(
      contextList
        ? { message: "nueva tarjeta creada" }
        : { message: "Lista no encontrada" }
    );
}
module.exports = createCard;
