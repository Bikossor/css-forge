const process = require('process');
const path = require('path');
const fs = require('fs');

module.exports = class Config {
    static get Name() {
        return 'cfconfig.json';
    };
    
    static get Path() {
        return path.join(process.cwd(), this.Name);
    };

    static get FileExists() {
        return fs.existsSync(this.Path);
    };
};
