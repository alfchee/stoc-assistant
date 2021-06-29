import { InputType, Field } from '@nestjs/graphql';

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
}
