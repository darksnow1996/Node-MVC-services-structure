const passport = require('passport');
const passportJWT = require("passport-jwt");
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

const {JWT_SECRET} = require('../config');
const {User} =  require('../models');
        
//console.log('we are hereeeeee')
const options = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: JWT_SECRET,
   
};

const JWTStrategyInstance = new JWTStrategy(options, function (jwt_payload, done) {
            // Since we are here, the JWT is valid!
          //  console.log('passport is here')
            //console.log(jwt_payload);

            // We will assign the `sub` property on the JWT to the database ID of user
            User.findOne({
                _id: jwt_payload.sub
            }, function (err, user) {

                // This flow look familiar?  It is the same as when we implemented
                // the `passport-local` strategy
                if (err) {
                    console.log(err, 'JWTERR');
                    return done(err, false);
                }
                if (user) {

                    // Since we are here, the JWT is valid and our user is valid, so we are authorized!
                    return done(null, user);
                } else {
                    return done(null, false);
                }

            });

        });
passport.use('jwt', JWTStrategyInstance);