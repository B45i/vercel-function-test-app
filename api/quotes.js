const data = require('./data');

module.exports = (req, res) => {
    const index = Math.floor(Math.random() * data.length);
    res.status(200).json({ quote: data[index] });
};
