const newBoard = require("../../models/board");

const context = require("../../models/Context");
function addBoard(req, res) {
  const board = new newBoard(req.params, req.query);
  const addBoard = context.addBoard(board);
  console.log(addBoard);
  res.json(board);
}

module.exports = addBoard;
