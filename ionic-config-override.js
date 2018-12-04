var fs = require('fs-extra');

fs.copy('src/assets/blockly','www/blockly');
fs.copy('src/assets/blocks','www/blocks');
fs.copy('src/assets/ardublocklyserver','www/ardublocklyserver');