const context = require("../../models/Context");
const { listen } = require("../../routes/lists");

function createCard(req, res) {
  let idList = req.query.idList;
  let newName = req.query.name;
  const newContext = context.getContextList();
  newContext.map((element) => {
    if (element.id === req.params.id) {
      const newCard = req.body.id;
      element.idCards.push(newCard);
    }
  });

  context.setContextList(newContext);
  console.log();
  res.status(200).json({
    message: `se ha creado una nueva tarjeta con id: ${idList} y name: ${newName}`,
  });
}
module.exports = createCard;
