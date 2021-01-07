
const{User} =  require('../models');
class userService{

    static async create(payload){
        try{
        let user = new User();
        let keys = Object.keys(payload);
        keys.forEach((payloadKey,index)=>{
            user[payloadKey] = payload[payloadKey];

        });

        return await user.save();
        }
        catch(error){
            throw error;
        }

    }

    static async find(payload) {
        try {
            return await User.find(payload);
        } catch (error) {
            throw error;
        }
    }
    static async findOne(payload) {
        try {
            return await User.findOne(payload);
        } catch (error) {
            throw error;
        }
    }
    static async findById(userId) {
        try {
            return await User.findById(userId);
        } catch (error) {
            throw error;
        }
    }

}

module.exports = userService;