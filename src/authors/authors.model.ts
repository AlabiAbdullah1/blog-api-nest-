import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Post } from '../posts/posts.model';

@Table
export class Author extends Model<Author> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  email: string;

  @HasMany(() => Post)
  posts: Post[];
}
