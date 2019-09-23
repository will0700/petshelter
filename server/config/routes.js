const petsController = require('../controllers/pets')

module.exports = function(app){
    app.get('/api/pets', petsController.getAll)
    app.post('/api/pets', petsController.create)
    app.delete('/api/pets/:id', petsController.delete)
    app.get('/api/pets/:id', petsController.getOne)
    app.put('/api/pets/:id', petsController.update)
}