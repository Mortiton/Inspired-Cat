import { Command } from '../interfaces/Command';
import { Message, EmbedBuilder, AttachmentBuilder } from 'discord.js'
import { checkHeartLevel } from '../services/userService';

const hearts: Command = {
    name: 'hearts',
    description: 'Check your heart level',
    async execute(message: Message) {
        const userId = message.author.id;

        //check the heart level in the database
        const heartLevel = await checkHeartLevel(userId);

        //response
        const response = heartLevel !== null ?
        `${message.author.username}, your hearts are currently level ${heartLevel} ❤️` :
        "You don't seem to have any hearts yet. Interact with the cat to earn some :3";
        
        try {
          const file = new AttachmentBuilder('./images/fastBeg.gif', { name: 'catBeg.gif' });
            const embed = new EmbedBuilder()
            .setColor('#c958d8')
            .setTitle('Heart Level')
            .setDescription(response)
            .setImage('attachment://catBeg.gif')
            .setFooter({ text: 'Keep kitty happy to earn more hearts!' });

            
            await message.channel.send({ 
              embeds: [embed],
              files: [file]
            });
          } catch (error) {
            console.error("Failed to send message", error);
            message.channel.send("Opps! Something went wrong. Please try again later.")
          }
        },
      };

      export default hearts;