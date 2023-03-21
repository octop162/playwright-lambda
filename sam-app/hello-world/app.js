const { execSync } = require('child_process')
exports.lambdaHandler = async () => {
    try {
        let result = execSync('npx playwright test');
        console.log(result.toString());
        return {'status': 'success'};
    } catch (err) {
        console.log(err.stdout.toString());
        return {'status': 'error'};
    }
};
