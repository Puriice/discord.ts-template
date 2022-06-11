const fs = require('fs');
const path = require('path');

const eventsPath = path.resolve(__dirname, '..', 'events');

const dirs = fs.readdirSync(eventsPath);

module.exports = (client) => {
	console.log('Loading events...');
	dirs.forEach((dir) => {
		const events = fs.readdirSync(path.join(eventsPath, dir));

		for (let i = 0; i < events.length; i += 1) {
			const file = events[i];

			const event = require(path.join(eventsPath, dir, file));

			if (!(event.name && event.execute)) {
				console.warn(`Event ${file} is missing a name or execute function. Skipping.`);
				continue;
			}

			if (event.once) {
				client.once(event.name, event.execute);
			} else {
				client.on(event.name, event.execute);
			}
		}
	});
	console.log('Events loaded!');
};