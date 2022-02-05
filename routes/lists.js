var router = require('express')();

//Actualizar Lista
router.post('/:id/?name=newName', require('../controllers/lists/updateList'));

//Obtener tarjetas
router.get('/:id', require('../controllers/lists/getCards'));

//Archivar o borrar Lista
router.delete('/:id', require('../controllers/lists/deleteList'));

module.exports = router;