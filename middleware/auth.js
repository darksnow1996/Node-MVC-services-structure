const passport = require('passport');
require('../services/passport');

module.exports = {
    jwt: async (req, res, next) => {
        //console.log(req.user._id);
        passport.authenticate("jwt", {
            session: false
        })(req, res, next);
    }
}