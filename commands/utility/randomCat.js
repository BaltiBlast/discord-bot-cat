const { SlashCommandBuilder } = require("discord.js");

getRandomCatPicture = async () => {
  const response = await fetch("https://api.thecatapi.com/v1/images/search");
  const data = await response.json();
  return data[0].url;
};

module.exports = {
  data: new SlashCommandBuilder().setName("cat").setDescription("Send a random cat picture 😺"),
  async execute(interaction) {
    const picture = await getRandomCatPicture();
    await interaction.reply(picture);
  },
};
