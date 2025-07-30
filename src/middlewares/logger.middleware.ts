// src/middlewares/logger.middleware.ts

import { Request, Response, NextFunction } from 'express';

export function logger(req: Request, res: Response, next: NextFunction) {
  const fechaHora = new Date().toISOString();
  console.log(`se accedio a las : [${fechaHora}] con el metodo: ${req.method} en la ruta: ${req.originalUrl}`);
  next();
}
