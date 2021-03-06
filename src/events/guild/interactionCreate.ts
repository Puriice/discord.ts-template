import { Interaction } from 'discord.js';

export default {
	name: 'interactionCreate',
	once: false,
	async execute(interaction: Interaction) {
		if (!interaction.isCommand()) return;

		const command = interaction.client.commands.get(interaction.commandName);

		if (!command) throw new Error('No such command: ' + interaction.commandName);

		try {
			await command.execute(interaction);
		} catch (error) {
			console.error(error);
			await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
		}
	},
};