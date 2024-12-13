import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Post } from './posts.model';

@Injectable()
export class PostsService {
  constructor(@InjectModel(Post) private postModel: typeof Post) {}

  findAll() {
    return this.postModel.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.postModel.findByPk(id, { include: { all: true } });
  }

  create(post: Partial<Post>) {
    return this.postModel.create(post);
  }
}
