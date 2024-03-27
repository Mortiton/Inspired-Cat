import dotenv from 'dotenv';
dotenv.config(); //Load the environment variables

import client from './client'
import './database/mongoose' //Database connection 

client.once('ready', () => {
    console.log(`${client.user?.tag} is online and ready!`);
});

client.on('messageCreate', (message) => {
    if (!message.author.bot) {
        console.log(`Message from ${message.author.tag}: ${message.content}`);
        //MESSAGE HANDLING LOGIC
    }
});

client.login(process.env.DISCORD_BOT_TOKEN)
