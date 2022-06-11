import { Client, Intents } from 'discord.js';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

if (!process.env.TOKEN) throw new Error('TOKEN is not defined. Please specify it in .env');

const intents = [Intents.FLAGS.GUILDS];

const client = new Client({ intents });

const handlersPath = path.join(__dirname, 'handler');

fs.readdirSync(handlersPath).filter(file => file.endsWith('.handler.js')).forEach(file => {
	const handler: (Client: Client) => void = require(path.join(handlersPath, file)).default;

	handler(client);
});

client.login(process.env.TOKEN);
