const path = require('path');
const fs = require('fs');
const basename = path.basename(__filename)

const fileObj = {}

fs.readdirSync(__dirname).forEach(file => {
    if (file !== basename) {
        const filename = file.replace('.js', '');
        const fileData = require(path.join(__dirname, file));
        fileObj[filename] = fileData[filename];

    }

});

module.exports = fileObj;
