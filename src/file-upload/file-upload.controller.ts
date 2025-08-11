import { Controller, FileTypeValidator, MaxFileSizeValidator, Param, ParseFilePipe, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileUploadService } from './file-upload.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { Type } from 'class-transformer';

@Controller('files')
export class FileUploadController {
  constructor(private readonly fileUploadService: FileUploadService) {}

  @Post('uploadImage/:id')
  @UseInterceptors(FileInterceptor('file'))
  async uploadImage (
    @Param('id') productId: string,
    @UploadedFile(
      new ParseFilePipe({//*estos parse me permiten hacer validaciones del archivo que voy a subir
        validators: [
          new MaxFileSizeValidator({
            maxSize: 200000, //*200 kb
            message: 'supera el maximo permitido (220 kb)'
          }),
          new FileTypeValidator({
            fileType: /(.jpg|.png|.webp|.jpeg)/
          }),
        ],

      }),
    )file: Express.Multer.File,
  )
  {
    return this.fileUploadService.uploadImage(file, productId)
  }

}
