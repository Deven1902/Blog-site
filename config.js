const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    DBURL: process.env.DBURL,
    PORT1: process.env.PORT1,
    PORT2: process.env.PORT2
}