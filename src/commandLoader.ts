import fs from 'fs';
import path from 'path'
import { Command } from './interfaces/Command';

//Creating a map to hold the commands
const commands = new Map<string, Command>();

//Determine the correct file extension(.ts for developemtn, .js for production)#
const ext = process.env.NODE_ENV === 'development' ? '.ts' : '.js';

//Read the command files
const commandFiles = fs.readdirSync(path.join(__dirname, 'commands')).filter(file => file.endsWith(ext));

for (const file of commandFiles) {
    //Import command files
    const command: Command = require(`./commands/${file}`).default;

    //Add the commands to the map
    commands.set(command.name, command);
    console.log(`Loaded Command: ${command.name}`)
}



export default commands;