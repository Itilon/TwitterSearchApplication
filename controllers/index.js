module.exports = (data, helpers) => {
    const postController = require('./post.controller')(data, helpers);
    const userController = require('./user.controller')(data, helpers);

    const controllers = {
        postController,
        userController,
    };

    return controllers;
};