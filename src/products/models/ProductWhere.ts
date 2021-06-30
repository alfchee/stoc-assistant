import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class ProductWhere {
  @Field((type) => Int, { nullable: true })
  id?: number;
}
