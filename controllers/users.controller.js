const {usersService} = require('../services');
const {Response,PasswordHelper, AuthHelper,Utility} = require('../helpers');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const {JWT_SECRET} = require('../config');

class UsersController{

    static async login(req,res,next){
        try{
            const {email,password} =  req.body;
            const userExist = await usersService.findOne({email:email});
            if(!userExist){
                return Response.authenticationError(res,"User does not exist");
            }

            const passwordValid = PasswordHelper.checkPasswordMatch(password,userExist.password);
            if(passwordValid){
                const tokenObject = Utility.issueJWT(userExist);
                return Response.ok(res,{
                    ...tokenObject,
                    message:'Log in succesful',
                });
            }
            else{
                return Response.authenticationError(res,"Password is incorrect");
            }

        }
        catch(error){
            next(error);
        }
        
        
    }

    static async register(req,res,next){
        try{
            const{email,password,name} =  req.body;
            const payload = {
                email                
            }
            const userExist = await usersService.findOne(payload);
            //console.log(userExist);

            if(userExist){
                return Response.conflictError(res, "User exists already");
            
            }
            const passwordHash = await PasswordHelper.encryptPassword(password);
            const createPayload = {
                email,
                password : passwordHash,
                name
            }
          //  console.log(createPayload);
            const user = await usersService.create(createPayload);

            const token = AuthHelper.generateToken({
                _id: user._id,
                name: user.name

            });

            return Response.ok(res,{
                token,
                user
            });


        }
        catch(error){
            next(error);
        }
    }


}

module.exports = UsersController;