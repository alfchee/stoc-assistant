import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CategoryCreateInput {
  @Field()
  name: string;

  @Field()
  slug: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  parentId?: number;

  @Field((type) => Int)
  catalogId: number;
}

@InputType()
export class CategoryUpdateInput {
  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  slug?: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  parentId?: number;

  @Field((type) => Int, { nullable: true })
  catalogId?: number;
}
