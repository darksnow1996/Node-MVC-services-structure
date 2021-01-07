const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    MONGO_URL: process.env.MONGO_URL,
    PORT:process.env.PORT || "4500",
    JWT_SECRET: process.env.JWT_SECRET || "your_jwt_secret"
}