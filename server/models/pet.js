const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter a name"],
        minlength: [3, "Name must be longer than 3"],
        unique: true
    },
    type: {
        type: String,
        required: [true, "Please enter a type"],
        minlength: [3, "something something type 3 characters idk lol"]
    },
    description: {
        type: String,
        required: [true, "Please enter a description"],
        minlength: [3, "Description must be longer than 3"]
    },
    skills: {
        type: [String],
    },
    likes:{
        type: Number,
        default: 0
    }
}, {timestamps: true}
)

mongoose.model('Pet', PetSchema)
PetSchema.plugin(uniqueValidator, { message: 'Name must be unique' })