import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CatalogCreateInput {
  @Field()
  name: string;

  @Field({ nullable: true })
  description?: string;
}

@InputType()
export class CatalogUpdateInput {
  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  updatedAt?: Date;
}
