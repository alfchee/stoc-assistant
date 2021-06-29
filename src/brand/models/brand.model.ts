import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Brand {
  @Field((type) => Int)
  id: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  createdAt: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
