module.exports = (data, helpers) => {
    const searchHelper = helpers.searchHelper;

    const getHome = (req, res) => {
        return res.render('home');
    };

    const getSearch = (req, res) => {
        const search = req.query.search;

        const {
            searchTerm,
            numberOfFollowers,
            verified,
            searchStartDate,
            searchEndDate,
        } = searchHelper.queryHelper(search);

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

                twitterData = searchHelper.imageHelper(twitterData);

                const dateContainer = searchHelper.dateHelper(twitterData);

                return res.render('result', {
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
