const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const configApp = (app) => {
    app.set('view engine', 'pug');

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/static', express.static(
        path.join(__dirname, '../static'))
    );

    app.use('/libs', express.static(
        path.join(__dirname, '../node_modules'))
    );
};

module.exports = {configApp};
