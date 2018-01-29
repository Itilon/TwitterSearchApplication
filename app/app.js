const express = require('express');

const init = (data) => {
    const app = express();

    require('../config/app.config').configApp(app);

    require('./routers').attachTo(app, data);

    app.use((req, res, next) => {
        res.status(404).render('404');
    });

    return Promise.resolve(app);
}

module.exports = { init };