import { Injectable, NotFoundException } from '@nestjs/common';
import { FileUploadRepository } from './file-upload.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/products/entities/product.entity';
import { Repository } from 'typeorm';
import { UpdateProductDto } from '../products/update-product.dto';
 

@Injectable()
export class FileUploadService {
constructor(
    private readonly fileUploadRepository: FileUploadRepository,
    @InjectRepository(Product)private readonly productRepository: Repository<Product>,
){}

async uploadImage(file: Express.Multer.File, productId: string){

   //* buscar el producto a actualizar (validacion):
    const product = await this.productRepository.findOneBy(
        {id: productId}
    );

    //Validamos el Id:
    if(!product){
        throw new NotFoundException('Producto no encontrado...')
    }  
        
    //Obtener URL de la imagen de Coudinary
    const response = await this.fileUploadRepository.uploadImage(file);//puede llegar el objeto o el error desde repository
    //*validamos que llega el objeto.secure_url
    if(!response.secure_url){
        throw new NotFoundException('Error al cargar imagenes en Coludinary')
    }   

    //*Modificar el producto con la nueva img
   const updateProduc = await this.productRepository.update(productId,{
       imgURL : response.secure_url,
    });
    
    return updateProduc;

}



}
