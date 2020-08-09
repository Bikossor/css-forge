const childProcess = require('child_process');

module.exports = class Runner {
    static runScript = (scriptPath, callback) => {
        const proc = childProcess.fork(scriptPath);

        let isInvoked = false;

        proc.on('error', err => {
            if (isInvoked) return;
            isInvoked = true;
            callback(err);
        });

        proc.on('exit', code => {
            if (isInvoked) return;
            isInvoked = true;
            let err = code !== 0
                ? new Error('exit code ' + code)
                : null;
            callback(err);
        });
    };
};
