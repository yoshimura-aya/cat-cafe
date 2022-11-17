import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiInternalServerErrorResponse, ApiOkResponse } from '@nestjs/swagger';
import { CatsService } from './cats.service';
import { CatDto } from './dto/cat.dto';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  @ApiCreatedResponse({description:"正常終了"})
  @ApiInternalServerErrorResponse({description:"内部サーバエラー"})
  async create(@Body() catDto: CatDto) {
    await this.catsService.create(catDto);
  }

  @Get()
  @ApiOkResponse({description:"正常終了", type:[CatDto]})
  @ApiInternalServerErrorResponse({description:"内部サーバエラー"})
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get(':id')
  findOne(
    @Param('id')
    id: number,
  ) {
    return this.catsService.findById(id);
  }
}
