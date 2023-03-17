const schedule = require('node-schedule');
const { messages } = require('../constants/messages');
const { groupIds } = require('../constants/GroupIds');
const sendReminders = (client) => {
    // this sends reminders every saturday mornings
    const job = schedule.scheduleJob('0 7 * * 6', ()=>{
        client.sendMessage(groupIds.generacionDeFe, messages)
    })
};
module.exports.sendReminders = sendReminders