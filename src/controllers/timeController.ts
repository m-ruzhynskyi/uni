import { Request, Response } from 'express';
import { getCurrentTime } from '../services/timeService.js';

export const getCurrentTimeController = (req: Request, res: Response): void => {
  const currentTime: string = getCurrentTime();
  res.send(`
    <span>Welcome to the Ethernet Ruzhynskyi Maksym!</span><br>
    <span>Time now: ${currentTime}</span>
  `);
};