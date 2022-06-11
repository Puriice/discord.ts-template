import { Collection } from "discord.js";

export interface Command {
	data: SlashCommandBuilder;
	execute: (interaction: Interaction) => Promise<void>;
}

module "discord.js" {
	export interface Client {
		commands: Collection<string, Command>;
	}
}

export { }