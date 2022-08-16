const mongoose = require('mongoose');
const Product = require('./product');
const { Schema } = mongoose;


const farmSchema = new Schema({
    name: {
        type: String,
        required: [true, 'name for farm is neccesary']
    },
    city: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Product'
        }
    ]
})

const Farm = mongoose.model('Farm', farmSchema);
module.exports = Farm;