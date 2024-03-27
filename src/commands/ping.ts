import { Command } from '../interfaces/Command';
import { Message } from 'discord.js';

export const ping: Command = {
    name: 'ping',
    execute(message: Message, args: string[]) {
        message.reply('Pong!');
    }
};