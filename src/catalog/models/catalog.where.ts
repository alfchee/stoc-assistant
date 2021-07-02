import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CatalogWhere {
  @Field((type) => Int, { nullable: true })
  id?: number;
}
