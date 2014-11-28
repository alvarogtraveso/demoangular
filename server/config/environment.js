var path = require('path');

module.exports = {
    // Server IP
    ip: process.env.OPENSHIFT_NODEJS_IP ||
        process.env.IP ||
        '127.0.0.1',

    // Server port
    port: process.env.OPENSHIFT_NODEJS_PORT ||
        process.env.PORT ||
        9000,

    // Root path of server
    root: path.normalize(__dirname + '/../..')
}
