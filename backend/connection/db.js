const {Sequelize} = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    'urlshort',
    'postgres',
    'arhaan',
    {
        dialect: 'postgres',
        host:process.env.DB_HOST,
        database: process.env.DB_NAME,
        port: process.env.DB_PORT,
        username: process.env.DB_USER,
    }
)

sequelize.authenticate()
.then(() => {
    console.log('Database Connected successfully');
})
.catch((error) => {
    console.error('Unable to connect to the database:', error);
});

module.exports = sequelize;