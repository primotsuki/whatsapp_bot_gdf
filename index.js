const { Client, Location, List, LocalAuth } = require('whatsapp-web.js');
const { sendDailyVerses } = require('./jobs/sendDailyVerses');
const { sendReminders } = require('./jobs/sendReminders');
require('dotenv').config();

const qrcode = require('qrcode-terminal');

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: { 
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
        headless: true }
});

client.initialize();

client.on('loading_screen', (percent, message) => {
    console.log('LOADING SCREEN', percent, message)
});

client.on('qr', (qr) => {
   //qrcode.generate(qr, {small: true})
   console.log(qr)
});

client.on('authenticated', async () => {
    console.log('authenticated');
});

client.on('ready', async () =>{
    console.log('starting scheduled jobs for the groups included');
    sendReminders(client);
    sendDailyVerses(client);
})
