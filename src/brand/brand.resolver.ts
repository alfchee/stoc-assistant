import { Resolver, Query, Args, Int, Mutation } from '@nestjs/graphql';
import { Brand } from './models/brand.model';
import { BrandService } from './brand.service';
import { BrandCreateInput, BrandUpdateInput } from './models/BrandInputs';
import { BrandWhere } from './models/BrandWhere';

@Resolver((Of) => Brand)
export class BrandResolver {
  constructor(private brandService: BrandService) {}

  @Query((returns) => Brand, { name: 'brand', nullable: true })
  async brand(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<Brand | null> {
    return this.brandService.brand({ id });
  }

  @Query((returns) => [Brand], { name: 'brands', nullable: 'items' })
  async brands(
    @Args('skip', { type: () => Int }) skip: number,
    @Args('take', { type: () => Int }) take: number,
  ): Promise<Brand[]> {
    return this.brandService.brands({ skip, take });
  }

  @Mutation((returns) => Brand, { name: 'createBrand' })
  async createBrand(@Args('brand') brand: BrandCreateInput): Promise<Brand> {
    return this.brandService.createBrand(brand);
  }

  @Mutation((returns) => Brand, { name: 'updateCategory' })
  async updateCategory(
    @Args('where') where: BrandWhere,
    @Args('data') data: BrandUpdateInput,
  ) {
    return this.brandService.updateBrand({ where, data });
  }

  @Mutation((returns) => Brand, { name: 'deleteBrand' })
  async deleteBrand(@Args('where') where: BrandWhere) {
    return this.brandService.deleteBrand(where);
  }
}
