import { Message } from "discord.js";
import commands from "../commandLoader";

export const messageCreate = async (message: Message) => {
  //Ignore bot messages
  if (message.author.bot) return;

  //Ignore messages without the ! prefix
  const prefix = "!";
  if (!message.content.startsWith(prefix)) return;

  //Extract the command name and arguments from the message
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const commandName = args.shift()?.toLowerCase();

  //Check commandName is not undefined
  if (!commandName) return;

  //Get the command from the commands collection
  const command = commands.get(commandName);

  //if the command exists, execute it
  if (command) {
    try {
      await command.execute(message, args);
    } catch (error) {
      console.error(error);
      message.reply("There was an error executing that command.");
    }
  }
};
