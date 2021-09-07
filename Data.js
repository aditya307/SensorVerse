const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DataSchema = new Schema({
    info: {
        type:String,
        required: true,
    },
    CreatedAt: {
        type: Date,
        default: Date.now,
      },
})


module.exports = mongoose.model('nodedatas', DataSchema);
