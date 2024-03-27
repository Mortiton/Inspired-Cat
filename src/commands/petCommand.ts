import { Command } from '../interfaces/Command';
import User from '../models/User'
import { Message } from 'discord.js'

export const petCommand: Command = {
    name: 'pet',
    async execute(message: Message) {
        const userId = message.author.id;
        const gifUrl = 'INSERT URL HERE'

        //Update the heart level within the database
        const user = await User.findOneAndUpdate(
            { userId },
            { $inc: { heartLevel: 1 } }, //increase heartLevel by 1
            { new: true, upsert: true } // if a document doesn't exist, create one
        );

        //Reponse
        message.channel.send(`*puurr* ${message.author.username}, your hearts are not level ${user.heartLevel} ❤️`);
        message.channel.send(gifUrl);
    }

}