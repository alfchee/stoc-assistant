import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Category } from '../../categories/models/category.model';
import { Brand } from '../../brand/models/brand.model';

@ObjectType()
export class Product {
  @Field((type) => Int)
  id: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  summary?: string;

  @Field()
  sku: string;

  @Field((type) => Int)
  categoryId: number;

  @Field((type) => Int)
  brandId: number;

  @Field()
  createdAt: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field((type) => Category, { nullable: true })
  Category?: Category;

  @Field((type) => Brand, { nullable: true })
  Brand?: Brand;
}
