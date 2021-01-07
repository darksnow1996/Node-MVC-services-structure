const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usersSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required:true
    },
    password:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: false
        
    },
    
    

},
 {
     timestamps:true
 });



module.exports = mongoose.model('User', usersSchema)