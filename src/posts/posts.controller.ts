import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  findAll() {
    return this.postsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postsService.findOne(+id);
  }

  @Post()
  create(@Body() post: { title: string; content: string; authorId: number }) {
    return this.postsService.create(post);
  }
}
