import express, { Request, Response } from 'express';
import { router } from './routes/loginRouter';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
const app = express();

app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieSession({keys: ['sadf']}))
app.use(router)

app.listen(3107, () => {
  	console.log('Listening on port 3107');
});