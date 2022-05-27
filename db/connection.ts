import { Sequelize } from 'sequelize';

const db = new Sequelize('db', 'user', 'password', {
    host: 'host',
    dialect: 'mysql',
    logging: false,
});

export default db;