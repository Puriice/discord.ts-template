const path = require('path');
const args = process.argv.slice(2);

if (args[0].toLowerCase() === 'dev' || args[0].toLowerCase() === 'development') {
	require(path.join(__dirname, 'development-deploy.js'));
} else if (args[0].toLowerCase() === 'prod' || args[0].toLowerCase() === 'production') {
	require(path.join(__dirname, 'production-deploy.js'));
}

require(path.resolve(__dirname, '..', 'src', 'index.js'));