const { Client, Intents } = require('discord.js');
const fs = require('fs');
const path = require('path');

require('dotenv').config();

if (!process.env.TOKEN) throw new Error('TOKEN is not defined. Please specify it in .env');

const intents = [Intents.FLAGS.GUILDS];

const client = new Client({ intents });

const handlersPath = path.join(__dirname, 'handler');

fs.readdirSync(handlersPath).filter(file => file.endsWith('.handler.js')).forEach(file => {
	const handler = require(path.join(handlersPath, file));

	handler(client);
});

client.login(process.env.TOKEN);