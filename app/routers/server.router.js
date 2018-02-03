const { Router } = require('express');

const attachTo = (app, data) => {
    const router = new Router;

    router
        .get('/', (req, res) => {
            res.render('home');
        })

        .get('/search', (req, res) => {
            const searchTerm = req.query.search[0];
            const numberOfFollowers = req.query.search[1]
            const searchStartDate = req.query.search[2];
            const searchEndDate = req.query.search[3];
            const verified = req.query.search[4];

            data.get('search/tweets', 
                    { q: `${searchTerm} since:${searchStartDate} until:${searchEndDate}`, count: 50 }, 
                    (err, data, response) => {

                        const twitterData = data.statuses;

                        let finalData = [];

                        if (numberOfFollowers.length === 0) {
                            finalData = twitterData;
                        } else {
                            twitterData.forEach((status) => {
                                if (status.user.followers_count >= Number(numberOfFollowers)) {
                                    finalData.push(status);
                                }
                            });
                        }

                        let dateContainer = [];

                        twitterData.forEach((status) => {
                            let date = status.created_at;
                            date = date.slice(4).substring(0, 15);

                            dateContainer.push(date);
                        });

                        res.render('search', {
                            data: finalData,
                            dateList: dateContainer
                        });
                    });
        });

    app.use('/', router);
};

module.exports = { attachTo };