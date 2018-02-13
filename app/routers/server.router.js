const {Router} = require('express');

const attachTo = (app, controllers) => {
    const router = new Router;

    const postController = controllers.postController;

    router
        .get('/', postController.getHome)

        .get('/search', postController.getSearch);

    app.use('/', router);
};

module.exports = {attachTo};
