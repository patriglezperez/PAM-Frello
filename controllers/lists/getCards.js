const context = require("../../models/Context");

function getCards(req, res) {
  let List = "";
  const contextList = context.getContextList();
  contextList.map((element) => {
    if (element.id === req.params.id) {
      List = element;
    }
  });
<<<<<<< HEAD
  console.log(List)
=======
>>>>>>> e6a5d4ecd8a28a8e82bbcdff71df2a243bdd5548
  res.status(200).json(List.length > 0 ? List.getCards() : { message: "No cards" });
}

module.exports = getCards;
