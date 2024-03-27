import {
  Client,
  AttachmentBuilder,
  TextChannel,
} from "discord.js";


export default function setupGuildCreateEvent(client: Client) {
  client.on("guildCreate", async (guild) => {
    console.log(`Joined new guild:${guild.name}`)
    const channel = guild.channels.cache.find(
      (ch) =>
        ch.isTextBased() && ch.permissionsFor(guild.members.me!).has("SendMessages")
    ) as TextChannel;

    if (!channel) {
        console.log("No suitable channel found")
    return; //Exit if no suitable channel is found
    }
    const attachment = new AttachmentBuilder("./images/catSit.gif");

    try {
      await channel.send({
        files: [attachment],
        content: "*mew*",
      });

    } catch (error) {
      console.error("Failed to send welcome Message", error);
    }
  });
}
