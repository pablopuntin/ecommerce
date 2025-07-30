"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = logger;
function logger(req, res, next) {
    const fechaHora = new Date().toISOString();
    console.log(`se accedio a las : [${fechaHora}] con el metodo: ${req.method} en la ruta: ${req.originalUrl}`);
    next();
}
//# sourceMappingURL=logger.middleware.js.map