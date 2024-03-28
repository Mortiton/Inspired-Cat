import { Command } from "../interfaces/Command";
import { Message, AttachmentBuilder } from "discord.js";
import { increaseHeartLevel } from "../services/userService";

const pet: Command = {
  name: "pet",
  description: "Pet the cat and increase your hearts",
  async execute(message: Message) {
    const userId = message.author.id;

    // Update the heart level within the database
    const user = await increaseHeartLevel(userId);


    // Attachment to send
    const attachment = new AttachmentBuilder('./images/catYes.gif');

    // Response
    try {
      await message.channel.send({
        files: [attachment],
        content: `*puurr* ${message.author.username}, your hearts are now level ${user.heartLevel} ❤️`,
      });
    } catch (error) {
      console.error("Failed to send message", error);
    }
  },
};

export default pet;

