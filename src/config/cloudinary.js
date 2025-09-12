"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cloudinaryConfig = void 0;
var cloudinary_1 = require("cloudinary");
var dotenv_1 = require("dotenv");
(0, dotenv_1.config)({ path: '.env' });
exports.cloudinaryConfig = {
    provide: 'CLOUDINARY',
    useFactory: function () {
        return cloudinary_1.v2.config({
            cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_API_SECRET,
        });
    },
};
