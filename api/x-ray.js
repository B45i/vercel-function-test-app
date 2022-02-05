const x = require('x-ray-scraper');
const fs = require('fs');

x('https://www.wishesmsg.com/good-morning-messages-wishes-quotes/', [
    'p.m',
]).then(res => {
    const data = `module.exports = ${JSON.stringify(res)}`;
    fs.writeFileSync('data.js', data);
});
