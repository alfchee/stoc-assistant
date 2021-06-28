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
