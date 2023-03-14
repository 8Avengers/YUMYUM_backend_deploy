"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multerOptionsFactory = void 0;
const multerS3 = require("multer-s3");
const client_s3_1 = require("@aws-sdk/client-s3");
const path = require("path");
const multerOptionsFactory = () => {
    const s3 = new client_s3_1.S3Client({
        region: process.env.AWS_BUCKET_REGION,
        credentials: {
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        },
    });
    return {
        storage: multerS3({
            s3: s3,
            bucket: process.env.AWS_BUCKET_NAME,
            key(_req, file, done) {
                const ext = path.extname(file.originalname);
                const basename = path.basename(file.originalname, ext);
                done(null, `${file.fieldname}/${basename}_${Date.now()}${ext}`);
            },
        }),
        limits: { fileSize: 10 * 1024 * 1024 },
    };
};
exports.multerOptionsFactory = multerOptionsFactory;
//# sourceMappingURL=multer.options.factory.js.map