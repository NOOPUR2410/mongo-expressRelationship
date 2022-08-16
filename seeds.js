const mongoose = require('mongoose');

const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand', { useNewUrlParser: true, useUnifiedTopology: true })

    .then(() => {
        console.log('Connection open!!')
    })
    .catch(err => {
        console.log("connection closed due to error!!!")
        console.log(err)
    })

const seedProducts = [{
    name: 'Mushrooms',
    price: 40,
    category: 'veggies'
},
{
    name: 'Banana',
    price: 90,
    category: 'fruits'
},
{
    name: 'peas',
    price: 50,
    category: 'veggies'
},
{
    name: 'date palms',
    price: 140,
    category: 'fruits'
},
{
    name: 'Brocolli',
    price: 250,
    category: 'veggies'
}]

Product.insertMany(seedProducts)
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e)
    })