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
    const heartLevel = user.heartLevel;

    //For each heart threshold a different response is given
    let responseContent = `${message.author.username}, your hearts are now level ${heartLevel} ❤️`;
    let attachmentFilePath = "./images/catSit.gif"; //Default image

    if (heartLevel < 3) {
      attachmentFilePath = "./images/catFright.gif";
      responseContent = `Cat doesn't know you. You gave him a spook! Your hearts are now level ${heartLevel} ❤️`;
    } else if (heartLevel >= 3 && heartLevel < 10) {
      attachmentFilePath = "./images/catLay.gif";
      responseContent = `Cat is tolerate of your existance... Your hearts are now level ${heartLevel} ❤️`;
    } else if (heartLevel >= 10 && heartLevel < 20) {
      attachmentFilePath = "./images/catCrouch.gif";
      responseContent = `Cat is enjoying your attention! Your hearts are now level ${heartLevel} ❤️`;
    } else if (heartLevel >= 20) {
      attachmentFilePath = "./images/fastBeg.gif";
      responseContent = `Cat loves you! Your hearts are now level ${heartLevel} ❤️`;
    }

    // Attachment to send
    const attachment = new AttachmentBuilder(attachmentFilePath);

    // Response
    try {
      await message.channel.send({
        files: [attachment],
        content: responseContent,
      });
    } catch (error) {
      console.error("Failed to send message", error);
    }
  },
};

export default pet;
