const util = require('node:util');
const exec = util.promisify(require('node:child_process').exec);
exports.lambdaHandler = async () => {
    try {
        const { stdout, stderr } = await exec('npx playwright test');
        console.dir(stdout);
        console.dir(stderr);
    } catch (err) {
        console.dir(err.stdout);
        console.dir(err.stderr);
        throw new Error("ERROR")
    }
};
