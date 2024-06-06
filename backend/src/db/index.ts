import { Sequelize } from 'sequelize';
import { DATABASE_DB, HOST_DB, PASSWORD_DB, USERNAME_DB } from '../config';

export default new Sequelize({
    dialect: "postgres",
    host: HOST_DB,
    port: 5432,
    database: DATABASE_DB,
    username: USERNAME_DB,
    password: PASSWORD_DB,
    dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false, // If you have a self-signed certificate, set this to false
        },
      },
  });