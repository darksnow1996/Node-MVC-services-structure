const {
    hash,
    compareSync
} = require("bcrypt");

class Password {
    static async encryptPassword(plainText) {
        const passwordHash = await hash(plainText, 10);
        return passwordHash;
    }
    static checkPasswordMatch(password, hashedPassword) {
        return compareSync(password, hashedPassword);
    }
    static randomPassword() {
        const special = "!@#$%^&*()_+=<>";
        const rnum = Math.floor(Math.random() * special.length);
        const alphaNumeric =
            Math.random()
            .toString(36)
            .substring(2, 8) +
            Math.random()
            .toString(36)
            .substring(2, 8)
            .toUpperCase();
        const password = alphaNumeric.replace(alphaNumeric[rnum], special[rnum]);
        return password;
    }
}

module.exports = Password;
