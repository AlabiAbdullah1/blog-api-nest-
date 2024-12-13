import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthorsService } from './author.service';
import { AuthorsController } from './authors.controller';
import { Author } from './authors.model';

@Module({
    imports:[SequelizeModule.forFeature([Author])],
    controllers:[AuthorsController],
    providers:[AuthorsService]
})
export class AuthorsModule {}
