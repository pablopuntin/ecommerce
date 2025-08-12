import { NestMiddleware } from "@nestjs/common";
import { NextFunction, Response, Request } from "express";
export declare class LoggerMiddeleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction): void;
}
