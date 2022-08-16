const mongoose = require('mongoose');
const mongooseErrorHandler = require('mongoose-validation-error-message-handler');

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
});

const model = mongoose.model('person', schema);

const valerror = new model({});
valerror.save(function (err, doc) {
    if (err) {
        const error = mongooseErrorHandler(err);
        console.log(error)
    }
})
module.exports = valerror;