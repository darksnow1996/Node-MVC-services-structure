const jwt = require("jsonwebtoken");
const config = require("../config");

class Auth {
  static generateToken(payload) {
    return jwt.sign(payload, config.JWT_SECRET);
  }
  static decodeToken(token, secret) {
    return jwt.decode(token, secret);
  }
}

module.exports = Auth;
