import express from 'express';
import sequelize from './db';
import cors from 'cors';
import router from './routes/index.route';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api', router);

sequelize.sync().then(() => {
  console.log('Database connected and synced.');
}).catch((err) => console.error(err));

const server = app.listen(3001, () => {
  console.log('Server is running on port 3001.');
});