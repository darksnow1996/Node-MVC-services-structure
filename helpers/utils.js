const Auth = require('./auth');
class utility {
    static issueJWT(user) {

        const _id = user._id;
        const expiresIn = '1d';

        const payload = {
            sub: _id,
            iat: Date.now()
        };

        const signedToken = Auth.generateToken(payload);

        return {
            token: "Bearer " + signedToken,
            expires: expiresIn
        }
    }
}

module.exports = utility;