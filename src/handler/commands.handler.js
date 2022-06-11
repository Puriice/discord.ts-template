const { Collection } = require('discord.js');
const fs = require('fs');
const path = require('path');

const commandsPath = path.resolve(__dirname, '..', 'commands');

module.exports = (client) => {
	console.log('Loading commands...');
	client.commands = new Collection();

	fs.readdirSync(commandsPath).filter(file => file.endsWith('.js')).forEach(file => {
		const command = require(path.join(commandsPath, file));

		client.commands.set(command.data.name, command);
	});
	console.log('Commands loaded!');
};