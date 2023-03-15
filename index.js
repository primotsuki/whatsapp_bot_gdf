const { Client, Location, List, LocalAuth } = require('whatsapp-web.js');
const { sendDailyVerses } = require('./jobs/sendDailyVerses');
const { sendReminders } = require('./jobs/sendReminders');
require('dotenv').config();

const qrcode = require('qrcode-terminal');

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: { headless: true }
});

client.initialize();

client.on('loading_screen', (percent, message) => {
    console.log('LOADING SCREEN', percent, message)
});

client.on('qr', (qr) => {
   qrcode.generate(qr, {small: true})
});

client.on('authenticated', async () => {
    console.log('authenticated');
});

client.on('ready', () =>{
    console.log('starting scheduled jobs for testing');
    sendReminders(client);
    sendDailyVerses(client);
})
