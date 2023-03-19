const schedule = require('node-schedule');
const { messages } = require('../constants/messages');
const { groupIds } = require('../constants/GroupIds');
const sendReminders = (client) => {
    // this sends reminders every saturday mornings
    const job = schedule.scheduleJob('0 9 * * *', ()=>{
        if (new Date().getDay() === 6) {
            client.sendMessage(groupIds.generacionDeFe, messages.serviceSatReminder)
        }
        if (new Date().getDay() === 0) {
            client.sendMessage(groupIds.generacionDeFe, messages.serviceSundayReminder)
        }
    })
};
module.exports.sendReminders = sendReminders