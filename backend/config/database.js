const mongoose = require('mongoose');
require('dotenv').config();
const db_url = process.env.db_url;

const databaseConnection = async (pre , post) => {
    mongoose.connect(db_url , 
        // {
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
        // }
    ).then(() => console.log('Database Connected'))
    .catch((err) => console.log(err));

};
module.exports = databaseConnection;