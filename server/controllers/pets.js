const mongoose = require('mongoose')
const Pet = mongoose.model('Pet')

module.exports = {
    getAll(req, res){
        Pet.find({}, null, {sort: {type: 1}})
        .then(pets => res.json({pets}))
        .catch(console.log)
    },

    getOne(req, res){
        Pet.findById(req.params.id)
        .then(pet => res.json({pet}))
        .catch(err => res.json({errors: err}))
    },

    create(req, res){
        Pet.create(req.body)
        .then(pet => res.json({pet}))
        .catch(err => {
            let errors = []
            for(key in err.errors){
                errors.push(err.errors[key].message)
            }
            res.json({errors})
        })
    },

    delete(req, res){
        Pet.findByIdAndDelete(req.params.id)
        .then(() => res.json({status: "success"}))
        .catch(err => res.json({errors: err}))
    },

    update(req, res){
        Pet.findByIdAndUpdate(
            req.params.id, 
            req.body,
            {
                new: true,
                runValidators: true,
                context: 'query'
            }
        )
        .then(pet => res.json({pet}))
        .catch(err => {
            let errors = []
            for(key in err.errors){
                errors.push(err.errors[key].message)
            }
            res.json({errors})
    })}
}