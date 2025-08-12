// src/middlewares/logger.middleware.ts

import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Response, Request } from "express";

@Injectable()
export class LoggerMiddeleware implements NestMiddleware{
  use(req: Request, res: Response, next: NextFunction){
    
    
    const {method, ip, originalUrl}= req;
    
    const actualDate = new Date();
    const date = actualDate.toLocaleDateString();
    const time = actualDate.toLocaleTimeString();

    console.log(`se ejecuto un ${method} ${originalUrl} [${date} - ${time}] -ip: ${ip}`)
    next()
  }
}