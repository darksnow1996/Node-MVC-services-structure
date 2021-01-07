const mongoose = require('mongoose');
const { MONGO_URL} = require('../config');
module.exports = async()=>{
    try{
       const connection = await mongoose.connect(MONGO_URL, {
           useNewUrlParser: true,
           useCreateIndex: true,
           useUnifiedTopology: true
       });
       console.log('Database Connected');
    }
    catch(error){
       throw error;
    }
}