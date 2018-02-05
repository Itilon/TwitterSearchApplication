const path = require('path');
const fs = require('fs');

const attachTo = (app, controllers) => {
    fs.readdirSync(__dirname)
        .filter((file) => file.includes('.router'))
        .map((file) => path.join(__dirname, file))
        .forEach((modulePath) => require(modulePath).attachTo(app, controllers));
};

module.exports = { attachTo };