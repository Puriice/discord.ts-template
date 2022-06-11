import { CommandInteraction } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';
	
export default {
	data: new SlashCommandBuilder()
		.setName('hey')
		.setDescription('reply hey message'),
	async execute(interaction: CommandInteraction) { 
		/* code here */
		await interaction.reply('I\'m working!');
	},
};