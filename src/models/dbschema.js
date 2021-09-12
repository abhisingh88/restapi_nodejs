const mongoose = require("mongoose")

const dbschema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true,
        unique: true,
        min: 10
    },
    address: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true,
        trim: true
    },
})


const Schema = new mongoose.model("Database", dbschema)

module.exports = Schema;