const { Router } = require('express');

const attachTo = (app, data) => {
    const router = new Router;

    router
        .get('/', (req, res) => {
            res.render('home');
        })

        .get('/search', (req, res) => {
            const searchTerm = req.query.search[0];
            const searchStartDate = req.query.search[1];

            data.get('search/tweets', 
                    { q: `${searchTerm} since:${searchStartDate}`, count: 5 }, 
                    (err, data, response) => {

                        const twitterData = data.statuses;
                        const dateContainer = [];

                        data.statuses.forEach((status) => {
                            let date = status.created_at;
                            date = date.slice(4).substring(0, 15);
                            dateContainer.push(date);
                        });

                        res.render('search', {
                            data: twitterData,
                            dateList: dateContainer
                        });
                    });
        });

    app.use('/', router);
};

module.exports = { attachTo };