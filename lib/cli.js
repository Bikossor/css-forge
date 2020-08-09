console.log("[css-forge] CLI works!");

const glob = require('glob');

let matchingFiles = glob("**/*.style.js", {
    sync: true
});

console.log(matchingFiles);
