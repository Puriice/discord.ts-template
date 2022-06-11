const fs = require('fs');
const path = require('path');
const args = process.argv.slice(2);

async function writeFile(file, content, increment = 0) {
	const name = `${path.basename(file, path.extname(file))}${increment ? ' copy' : ''}${increment > 1 ? ` ${increment}` : ''}${path.extname(file)}`;
	const dir = path.dirname(file);
	const newFile = path.join(dir, name);

	if (fs.existsSync(newFile)) {
		writeFile(file, content, increment + 1);
	} else {
		fs.writeFileSync(newFile, content);
		return;
	}
}

/*
 *  npm run gen commands [name?] [description?]
 *  yarn gen commands [name?] [description?]
 */
if (args[0].toLowerCase() === 'commands' || args[0].toLowerCase() === 'command') {
	console.log('generating commands...');
	const commands = `const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('${args[1] ? args[1] : 'command-name'}')
		.setDescription('${args[2] ? args[2] : 'command-description'}'),
	async execute(interaction) {
		/* code here */
		await interaction.reply('I\\'m working!');
	},
};`;

	const commandsPath = path.resolve(__dirname, '..', 'src', 'commands');

	writeFile(path.join(commandsPath, `${args[1] ? args[1] : 'command-name'}.js`), commands);

	/*
	*  npm run gen events [type: client | guild] [event-name?] [once?]
	*  yarn gen events [type: client | guild] [event-name?] [once?]
	*/
} else if (args[0].toLowerCase() === 'events' || args[0].toLowerCase() === 'event') {
	if (!args[1]) throw new Error('Event type is required.');
	if (['client', 'guild'].indexOf(args[1].toLowerCase()) === -1) throw new Error('Event type must be either "client" or "guild".');

	console.log('generating events...');

	const events = `module.exports = {
	name: '${args[2] ? args[2] : 'event-name'}',
	once: ${Boolean(args[3])},
	execute() {
		/* code here */

	},
};`;

	const eventsPath = path.resolve(__dirname, '..', 'src', 'events', args[1]);

	writeFile(path.join(eventsPath, `${args[2] ? args[2] : 'event-name'}.js`), events);
}