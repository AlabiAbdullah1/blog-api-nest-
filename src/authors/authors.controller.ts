import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { AuthorsService } from './author.service';

@Controller('authors')
export class AuthorsController {
  constructor(private readonly authorsService: AuthorsService) {}

  @Get()
  findAll() {
    return this.authorsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authorsService.findOne(+id);
  }

  @Post()
  create(@Body() author: { name: string; email: string }) {
    return this.authorsService.create(author);
  }
}
