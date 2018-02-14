module.exports = (data, helpers) => {
    const searchHelper = helpers.searchHelper;

    const getHome = (req, res) => {
        return res.render('home');
    };

    const getSearch = (req, res) => {
        const search = req.query.search;

        const searchTerm = search[0];
        const numberOfFollowers = search[1];

        let verified;
        let searchStartDate;
        let searchEndDate;

        if (search.length === 5) {
            verified = search[2];
            searchStartDate = search[3];
            searchEndDate = search[4];
        } else {
            searchStartDate = search[2];
            searchEndDate = search[3];
        }

        const numberOfResults = 500;

        data.search(searchTerm, searchStartDate, searchEndDate, numberOfResults)
            .then((dataObj) => {
                let twitterData = dataObj.data.statuses;
                twitterData = searchHelper.followersHelper(
                    twitterData,
                    numberOfFollowers
                );
                twitterData = searchHelper.verifiedHelper(
                    twitterData,
                    verified
                );

                const dateContainer = searchHelper.dateHelper(twitterData);

                return res.render('search', {
                    data: twitterData,
                    dateList: dateContainer,
                });
            });
    };

    return {
        getHome,
        getSearch,
    };
};
