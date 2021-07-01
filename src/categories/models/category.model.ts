import { Field, Int, ObjectType } from '@nestjs/graphql';

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

  @Field()
  createdAt: Date;

  @Field((type) => [Category], { nullable: 'items' })
  Categories?: Category[];
}
