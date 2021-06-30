import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class ForeingID {
  @Field((type) => Int)
  id: number;
}

@InputType()
export class ProductCreateInput {
  @Field()
  name: string;

  @Field({ nullable: true })
  summary?: string;

  @Field()
  sku: string;

  @Field((type) => Int)
  categoryId: number;

  @Field((type) => Int)
  brandId: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}

@InputType()
export class ProductUpdateInput {
  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  summary?: string;

  @Field({ nullable: true })
  sku?: string;

  @Field((type) => Int, { nullable: true })
  categoryId?: number;

  @Field((type) => Int, { nullable: true })
  brandId?: number;

  @Field({ nullable: true })
  createdAt: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
