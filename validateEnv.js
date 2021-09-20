const {cleanEnv, str, num} = require('envalid');

function validateEnv(envConfig) {
    return cleanEnv(envConfig, {
        NODE_ENV: str({
            desc: 'One of the IOCCs',
            choices: ['production', 'development', 'anal'],
            default: 'development',
        }),
        PORT: num({
            desc: 'Port adress for dev server',
            default: 4200,
        }),
    });
}

module.exports = validateEnv;
