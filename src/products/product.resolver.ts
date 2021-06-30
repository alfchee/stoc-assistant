import { Resolver, Query, Args, Int, Mutation } from '@nestjs/graphql';
import { Product } from './models/product.model';
import { ProductService } from './product.service';
import {
  ProductCreateInput,
  ProductUpdateInput,
} from './models/product.inputs';
import { ProductWhere } from './models/ProductWhere';

@Resolver((of) => Product)
export class ProductResolver {
  constructor(private productService: ProductService) {}

  @Query((returns) => Product, { name: 'product', nullable: true })
  async product(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<Product | null> {
    return this.productService.product({ id });
  }

  @Query((returns) => [Product], { name: 'products', nullable: 'items' })
  async products(
    @Args('skip', { type: () => Int }) skip: number,
    @Args('take', { type: () => Int }) take: number,
  ): Promise<Product[]> {
    return this.productService.products({ skip, take });
  }

  @Mutation((returns) => Product, { name: 'createProduct' })
  async createProduct(
    @Args('product') product: ProductCreateInput,
  ): Promise<Product> {
    return this.productService.createProduct(product);
  }

  @Mutation((returns) => Product, { name: 'updateProduct' })
  async updateProduct(
    @Args('where') where: ProductWhere,
    @Args('data') data: ProductUpdateInput,
  ): Promise<Product> {
    return this.productService.updateProduct({ where, data });
  }

  @Mutation((returns) => Product, { name: 'deleteProduct' })
  async deleteProduct(@Args('where') where: ProductWhere): Promise<Product> {
    return this.productService.deleteProduct(where);
  }
}
