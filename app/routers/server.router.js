const { Router } = require('express');

const attachTo = (app, data) => {
    const router = new Router;

    router
        .get('/', (req, res) => {
            res.render('home');
        })

    app.use('/', router);
};

module.exports = { attachTo };