const process = require('process');
const path = require('path');
const fs = require('fs');

module.exports = class Config {
    static Name = 'cfconfig.json';
    static Path = path.join(process.cwd(), CONFIG_FILE_NAME);
    static FileExists = fs.existsSync(CONFIG_FILE_PATH);
};
