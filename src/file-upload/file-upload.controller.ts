import { Controller, Param, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
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
    @UploadedFile()file: Express.Multer.File,
  )
  {
    return this.fileUploadService.uploadImage(file, productId)
  }

}
