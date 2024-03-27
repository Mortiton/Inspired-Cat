import fs from 'fs';
import path from 'path'
import { Command } from './interfaces/Command';

//Creating a map to hold the commands
const commands = new Map<string, Command>();

//Read the command files
const commandFiles = fs.readdirSync(path.join(__dirname, 'commands')).filter(file => file.endsWith('.ts'));

for (const file of commandFiles) {
    //Import command files
    const command: Command = require(`./commands/${file}`).default;

    //Add the commands to the map
    commands.set(command.name, command);
}

export default commands;