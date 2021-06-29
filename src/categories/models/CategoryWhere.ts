import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CategoryWhere {
  @Field((type) => Int, { nullable: true })
  id?: number;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  slug?: string;
}
