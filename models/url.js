const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const urlSchema = new Schema({
    token: {
        type:String,
        unique:true
    },

});



module.exports = mongoose.model('Url', urlSchema)