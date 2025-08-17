import { Controller, FileTypeValidator, MaxFileSizeValidator, Param, ParseFilePipe, Post, UploadedFile, UseInterceptors, UseGuards, Put } from '@nestjs/common';
import { FileUploadService } from './file-upload.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { AuthGuard } from 'src/auth/guard/auth.guard';
import { ApiBearerAuth, ApiConsumes, ApiOperation, ApiParam, ApiResponse, ApiBody } from '@nestjs/swagger';
import { Role } from 'src/auth/roles.enum';
import { Roles } from 'src/decorators/roles.decorator';
import { RolesGuard } from 'src/auth/guard/roles.guard';

@ApiBearerAuth()
@Controller('files')
export class FileUploadController {
  constructor(private readonly fileUploadService: FileUploadService) {}

  @Roles(Role.Admin)
  @UseGuards(AuthGuard, RolesGuard)
  @Put('uploadImages/:id')
  @ApiBearerAuth()
  @ApiOperation({summary: 'cargar imagen para un producto'})
  @ApiParam({name: 'id', description: 'ID del producto', type: String})
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description:'subir archivo',
    required: true,
    schema:{
      type: 'object',
      properties:{
        file: {
          type: 'string',
          format: 'binary' //*Buffer
        }
      }
    }
  })
  @ApiResponse({status: 201,})
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
