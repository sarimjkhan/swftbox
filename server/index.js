import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import urlShortenerRoutes from './routes/urlshortener.routes.js';
import redirectionRoutes from './routes/redirection.routes.js';

dotenv.config();
const port = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());

const uri = process.env.MONGO_DB_CONNECTION;
mongoose.connect(uri);
mongoose.connection.once('open', () => {
  console.log('Database connection succesful!');
});

app.use('/urls', urlShortenerRoutes);
app.use('/', redirectionRoutes);

app.listen(port, () => {
  console.log('server listening on port ' + port);
});
