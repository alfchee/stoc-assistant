import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Category } from '../../categories/models/category.model';

@ObjectType()
export class Catalog {
  @Field((type) => Int)
  id: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  createdAt: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field((type) => [Category], { nullable: 'itemsAndList' })
  categories?: Category[];
}
