const context = require("../../models/Context");

function getCards(req, res) {
  let List = "";
  const contextList = context.getContextList();
  contextList.map((element) => {
    if (element.id === req.params.id) {
      List = element;
    }
  });
  console.log(List)
  res.status(200).json(List.length > 0 ? List.getCards() : { message: "No cards" });
}

module.exports = getCards;
