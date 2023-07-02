import Express from 'express';
import cors from 'cors';
import {router as feedRouter} from './routes/feed.js';
const app = Express();

const port = 3000

var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Credentials', true);
  next();
});
app.use(Express.json());
app.use(cors(corsOptions));

app.use('/', feedRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})