const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    DBURL: process.env.DBURL,
}