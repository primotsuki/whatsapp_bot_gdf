const { getDailyVerse } = require('../bibleapi/getVerses');
const { convert } = require('html-to-text');
const schedule = require('node-schedule');
const { groupIds } = require('../constants/GroupIds');
const options = {
    wordwrap: 130,
    // ...
  };
module.exports.sendDailyVerses = async (client) => {
    const response = await getDailyVerse();
    const verse = convert(response.data, options);
    const IndexBracket = verse.indexOf('[');
    const job = schedule.scheduleJob('0 8 * * *', () => {
        client.sendMessage(groupIds.generacionDeFe, verse.substring(0, IndexBracket))
    })
}