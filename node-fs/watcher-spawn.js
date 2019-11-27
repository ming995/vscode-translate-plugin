const fs = require("fs");
const spawn = require("child_process").spawn;
const fileName = process.argv[2];

fs.watch(
    fileName,
    () => {
        const ls = spawn('ls', ['-l', '-h', fileName]);
        let output = '';

        ls.stdout.on('data', chunk => output += chunk);

        ls.on('close', () => {
            const parse = output.split(/\s+/);
            console.log(parse[0], parse);
        });
    }
)