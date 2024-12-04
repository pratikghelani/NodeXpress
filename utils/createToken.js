const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const { encrypt } = require("../utils/generalEncryption");


const createToken = (data) => {
    return new Promise((resolve, reject) => {
        try {
            if (!data) {
                reject(new Error("Payload must be required"));
                return;
            }
            const generatedToken = jwt.sign(data, process.env.JWT_SECRET);
            encrypt(generatedToken)
                .then((token) => {
                    resolve(token);
                })
                .catch((e) => {
                    reject(e);
                });
        } catch (e) {
            reject(e);
        }
    });
};

module.exports = { createToken };