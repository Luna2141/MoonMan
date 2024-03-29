const { Client } = require("discord.js");
require("dotenv").config();

const client = new Client();

//access ENV file
const prefix = process.env.PREFIX;

client.on("ready", () => {
    console.log('Logged in as ${client.user.tag}!');
});

client.on("messageCreate", message => {

    if (message.author.bot) return;
    if (message.content.indexOf(prefix.length) !== 0) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const args = args.shift().toLowerCase();

    if (command === "ping") {
        message.reply("Pong!");
    }
});