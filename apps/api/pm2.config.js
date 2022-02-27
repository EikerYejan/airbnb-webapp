/* eslint-disable */
const path = require('path')

module.exports = [
  {
    script: path.join(__dirname, './dist/src/main.js'),
    name: 'app',
    exec_mode: 'cluster',
    instances: 1,
  },
]
