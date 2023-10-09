const bcrypt = require('bcrypt');
const saltRounds = 10;

const EncryptPwd = (data) => {
    return bcrypt.hashSync(String(data), saltRounds);
}

const DecryptPwd = (data, encryptedPwd) => {
    return bcrypt.compareSync(String(data), encryptedPwd);
}

module.exports = {
    EncryptPwd,
    DecryptPwd
}