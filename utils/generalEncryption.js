const crypto = require("crypto");
const algorithm = "aes-256-cbc"; //Using AES encryption
const encKey = process.env.ENC_KEY;
const encIv = process.env.IV_KEY;

//Encrypting text
const encrypt = (text) => {
    return new Promise((resolve, reject) => {
        try {
            let cipher = crypto.createCipheriv(algorithm, encKey, encIv);
            let encrypted = cipher.update(text);
            encrypted = Buffer.concat([encrypted, cipher.final()]);
            resolve(encrypted.toString("hex"));
        } catch (e) {
            reject(e);
        }
    });
};

// Decrypting text.
const decrypt = (text) => {
    return new Promise((resolve, reject) => {
        try {
            let encryptedText = Buffer.from(text, "hex");
            let decipher = crypto.createDecipheriv(algorithm, encKey, encIv);
            let decrypted = decipher.update(encryptedText);
            decrypted = Buffer.concat([decrypted, decipher.final()]);
            resolve(decrypted.toString());
        } catch (e) {
            reject(e);
        }
    });
};

module.exports = {
    encrypt,
    decrypt,
};
