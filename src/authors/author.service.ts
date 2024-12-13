import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Author } from './authors.model';

@Injectable()
export class AuthorsService {
  constructor(@InjectModel(Author) private authorModel: typeof Author) {}

  findAll() {
    return this.authorModel.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.authorModel.findByPk(id, { include: { all: true } }); 
  }

  create(author: Partial<Author>) {
    return this.authorModel.create(author);
  }
}
