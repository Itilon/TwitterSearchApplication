const { Router } = require('express');

const attachTo = (app, data) => {
    const router = new Router;

    router
        .get('/', (req, res) => {
            res.render('home');
        })

        .get('/search', (req, res) => {
            const searchTerm = req.query.search;

            data.get('search/tweets', 
                    { q: `${searchTerm} since:2018-01-30`, count: 5 }, 
                    (err, data, response) => {

                        const twitterData = data.statuses;

                        res.render('search', {
                            data: twitterData
                        });
                    });
        });

    app.use('/', router);
};

module.exports = { attachTo };