const mongoose = require('mongoose');
const { Schema } = mongoose;
const productSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name cannot be left Blank!!']
    },
    price: {
        type: Number,
        min: 0,
        required: true
    },
    category: {
        type: String,
        lowerCase: true,
        enum: ['fruits', 'veggies', 'grocery']
    },
    farm: {
        type: Schema.Types.ObjectId,
        ref: 'Farm'
    }

})
const Product = mongoose.model('Product', productSchema)

module.exports = Product;