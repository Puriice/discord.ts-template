import { Client, Collection } from "discord.js";
import { Command } from "../../type/common/discord";

import fs from "fs";
import path from "path";

const commandsPath = path.resolve(__dirname, '..', 'commands');

export default (client: Client) => {
	console.log('Loading commands...');
	client.commands = new Collection();

	fs.readdirSync(commandsPath).filter((file: string) => file.endsWith('.js')).forEach((file: string) => {
		const command: Command = require(path.join(commandsPath, file)).default;

		client.commands.set(command.data.name, command);
	});

	console.log('Commands loaded!');
};