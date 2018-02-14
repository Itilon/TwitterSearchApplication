module.exports = () => {
    const followersHelper = (twitterData, numberOfFollowers) => {
        let data = [];

        if (numberOfFollowers.length === 0) {
            data = twitterData;
        } else {
            twitterData.forEach((status) => {
                if (status.user.followers_count >= Number(numberOfFollowers)) {
                    data.push(status);
                }
             });
        }

        return data;
    };

    const verifiedHelper = (twitterData, verified) => {
        let data = [];

        if (verified === undefined) {
            data = twitterData;
        } else {
            twitterData.forEach((status) => {
                if (status.user.verified) {
                    data.push(status);
                }
             });
        }

        return data;
    };

    const dateHelper = (twitterData) => {
        const dateContainer = [];

        twitterData.forEach((status) => {
            let date = status.created_at;
            date = date.slice(4).substring(0, 15);
            dateContainer.push(date);
        });

        return dateContainer;
    };

    return {
        followersHelper,
        verifiedHelper,
        dateHelper,
    };
};
