import { Command } from "../interfaces/Command";
import { Message } from "discord.js";
import { increaseHeartLevel } from "../services/userService";

export const petCommand: Command = {
  name: "pet",
  async execute(message: Message) {
    const userId = message.author.id;
    const gifUrl = "INSERT URL HERE";

    //Update the heart level within the database
    const user = await increaseHeartLevel(userId);

    //Reponse
    message.channel.send(
      `*puurr* ${message.author.username}, your hearts are now level ${user.heartLevel} ❤️`
    );
    message.channel.send(gifUrl);
  },
};
