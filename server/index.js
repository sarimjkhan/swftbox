import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import urlShortenerRoutes from './routes/urlshortener.routes.js';
import redirectionRoutes from './routes/redirection.routes.js';

dotenv.config();
const port = process.env.BPORT || 5001;
const app = express();

app.use(cors());
app.use(express.json());

const uri = process.env.MONGO_DB_CONNECTION;
mongoose.connect(uri);
mongoose.connection.once('open', () => {
  console.log('Database connection succesful!');
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('../client/build'));
}

app.use('/urls', urlShortenerRoutes);
app.use('/', redirectionRoutes);

app.listen(port, () => {
  console.log('server listening on port ' + port);
});
