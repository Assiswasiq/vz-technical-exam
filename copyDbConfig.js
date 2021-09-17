const shell = require('shelljs');

shell.mkdir('-p', 'dist/config/');
shell.cp('-R', 'src/config/codes.json', 'dist/config/');
shell.cp('-R', 'src/database', 'dist/database/');
shell.cp('-R', 'package.json', 'dist/');

