const axios = require('axios');

module.exports.getverse = (verse) => {
    return axios.get(`${process.env.BIBLIE_API_URL}/${process.env.BIBLIE_VERSION}/search?query=${verse}`,{
        headers: {
            'api-key': process.env.BIBLIE_API_KEY
        }
    })
};
module.exports.getDailyVerse = () => {
    return axios.get(`${process.env.BIBLIE_API_URL}?language=nvi`);
}