import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Catalog } from '../../catalog/models/catalog.model';

@ObjectType()
export class Category {
  @Field((type) => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  slug: string;

  @Field({ nullable: true })
  description?: string;

  @Field((type) => Int, { nullable: true })
  parentId?: number;

  @Field((type) => Int)
  catalogId: number;

  @Field()
  createdAt: Date;

  @Field((type) => [Category], { nullable: 'items' })
  Categories?: Category[];

  @Field((type) => Catalog, { nullable: true })
  catalog?: Catalog;
}
