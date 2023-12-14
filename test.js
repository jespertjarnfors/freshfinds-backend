const validator = require("validator");

const email = 'userexample.com'

function isEmail() {
    if (validator.isEmail(email)) {
        console.log('True');
    } else {
        console.log('false');
    }
}

isEmail();