import { Command } from '../interfaces/Command';
import { Message } from 'discord.js'
import { checkHeartLevel } from '../services/checkHeartLevel';

const hearts: Command = {
    name: 'hearts',
    description: 'Check your heart level',
    async execute(message: Message) {
        const userId = message.author.id;

        //check the heart level in the database
        const user = await checkHeartLevel(userId);
        
        try {
            await message.channel.send(`${message.author.username} has ${user.heartLevel} hearts ❤️`)
          } catch (error) {
            console.error("Failed to send message", error);
          }
        },
      };

      export default hearts;