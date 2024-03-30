import dotenv from 'dotenv';
dotenv.config(); //Load the environment variables
import client from './client'
import setupGuildCreateEvent from './events/guildCreate';
import './database/mongoose' //Database connection 
import { messageCreate } from './events/messageCreate';
// import { updateUserHeartLevel } from './utils/testFunctions';

//TESTING
// const ID = "116370325440036864";
// updateUserHeartLevel(ID, 0);

//Event handlers
setupGuildCreateEvent(client);
client.on('messageCreate', messageCreate);

//Login to discord with the bot token
client.login(process.env.DISCORD_BOT_TOKEN)

//Successful Log
client.on('ready', () => {
    console.log("Bot is ready!");
})
