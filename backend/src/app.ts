import express from 'express';
import sequelize from './db';
import router from './routes/index.route';
import { Server } from 'socket.io';

const app = express();

app.use(express.json());
app.use('/api', router);

sequelize.sync().then(() => {
  console.log('Database connected and synced.');
}).catch((err) => console.error(err));

const server = app.listen(3001, () => {
  console.log('Server is running on port 3001.');
});
const io = new Server(server);