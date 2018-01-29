const path = require('path');
const fs = require('fs');

const attachTo = (app, data) => {
    fs.readdirSync(__dirname)
        .filter((file) => file.includes('.router'))
        .map((file) => path.join(__dirname, file))
        .forEach((modulePath) => require(modulePath).attachTo(app, data));
};

module.exports = { attachTo };