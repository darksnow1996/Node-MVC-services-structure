const expressLoader = require('./express');
const mongooseLoader = require('./mongoose');




module.exports = async(app)=> {
    try{
         expressLoader(app);
       await  mongooseLoader();
    }
    catch(error){
       throw error;
    }
}