module.exports = () => {
    const searchHelper = require('./search.helper')();

    const helpers = {
        searchHelper,
    };

    return helpers;
};
