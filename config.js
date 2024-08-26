require("dotenv").config();

const { TOKEN, CLIENT_ID, GUILD_ID } = process.env;
module.exports = { token: TOKEN, clientId: CLIENT_ID, guildId: GUILD_ID };
