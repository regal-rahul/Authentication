const bcrypt  = require('bcrypt');

const hashPassword = async () => {
    const salt = await bcrypt.genSalt(10);
    const hash =  await bcrypt.hash(pw, salt);
    console.log(salt);
    console.log(hash);
}

hashPassword('monkey');

