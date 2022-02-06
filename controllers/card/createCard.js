const context = require("../../models/Context");

function createCard(req, res) {
  let contextList = context.getContextList(); // Buscamos en la lista
  const newContext = contextList.map((list) => {
    //Vemos que lista coincide con la que estamos buscando
    if (list.idList === req.query.idList) {
      let newCard = new Card(); //Creamos una lista (no tengo claro que pueda hacer esto aqui)
      contextList.addCard(newCard);
      //newCard.setName(req.query.name)
    }
    return newCard;
  });

  context.setContextList(newContext);
  res.status(200).json({ message: "nueva tarjeta creada" });
}
module.exports = createCard;
