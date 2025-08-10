import { FileUploadRepository } from './file-upload.repository';
import { Product } from 'src/products/entities/product.entity';
import { Repository } from 'typeorm';
export declare class FileUploadService {
    private readonly fileUploadRepository;
    private readonly productRepository;
    constructor(fileUploadRepository: FileUploadRepository, productRepository: Repository<Product>);
    uploadImage(file: Express.Multer.File, productId: string): Promise<import("typeorm").UpdateResult>;
}
