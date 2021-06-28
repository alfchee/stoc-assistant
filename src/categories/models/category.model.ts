import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Category {
  @Field((type) => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  slug: string;

  @Field()
  description: string;

  @Field((type) => Int)
  parentId: number;

  @Field()
  createdAt: Date;
}
