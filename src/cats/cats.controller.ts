/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Controller,
  Get,
  Post,
  Req,
  Header,
  Redirect,
  Query,
  Param,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { Request } from 'express';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { ListAllEntities } from './dto/ListAllEntities';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  async create(@Body() CreateCatDto: CreateCatDto) {
    this.catsService.create(CreateCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }
  // @Get('docs')
  // @Redirect('https://nestjs.com', 302)
  // getDocs(@Query('version') version) {
  //   if (version && version === '5') {
  //     return { url: `https://docs.nestjs.com/v5/` };
  //   }
  // }


  // pc로들어오는 사용자와 모바일로들어오는 사용자 분리
  // 또는, 관리자와 일반사용자를 분리하고 싶을때 subdomain 사용.
  // ex 배민 사업자, 배달시켜먹는 사람.등으로 트래픽 분리 가능.
  // 대부분 로드밸런서 사용. 굳이 잘 안쓴다.
}
