const path = require('path');

let config = {};

config.entry = './src/index.js';

config.output = {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
}
