import express, {Request, Response} from 'express';
import { getCurrentTimeController } from './controllers/timeController.js';

const app: express.Application = express();
const port: number = 8080;

app.get('/', getCurrentTimeController);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
