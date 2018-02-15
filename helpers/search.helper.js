module.exports = () => {
    const queryHelper = (search) => {
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

        return {
            searchTerm,
            numberOfFollowers,
            verified,
            searchStartDate,
            searchEndDate,
        };
    };
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

    const imageHelper = (twitterData) => {
        twitterData.forEach((status) => {
            const imageUrl = status.user.profile_image_url_https;
            const urlMain = imageUrl.substring(0, imageUrl.indexOf('_normal'));
            const urlEnd = imageUrl.substring(imageUrl.indexOf('_normal') + 7);
            status.user.profile_image_url_https = `${urlMain}${urlEnd}`;
        });

        return twitterData;
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
        queryHelper,
        followersHelper,
        verifiedHelper,
        imageHelper,
        dateHelper,
    };
};
