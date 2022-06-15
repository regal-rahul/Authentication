const bcrypt  = require('bcrypt');

const hashPassword = async (pw) => {
    const salt = await bcrypt.genSalt(12);
    const hash =  await bcrypt.hash(pw, salt);
    console.log(salt);
    console.log(hash);
}
const login = async(pw, hashedPw) => {
    const result = await bcrypt.compare(pw, hashedPw);
    if (result) {
        console.log('Logged in Successfully!');
    } else {
        console.log('Try Again');
    }
}


// hashPassword('monkey');
login('monkey', '$2b$12$B6apUukdqaVc/qZCnCSSNuyGJ5qXnCEvkGvxqhVt/QnHzDuUPNqqe');
