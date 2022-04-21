
const os = require('os')

module.exports = os.networkInterfaces()[Object.keys(os.networkInterfaces())[0]][1].address