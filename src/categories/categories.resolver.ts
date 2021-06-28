import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { Category } from './models/category.model';
import { CategoryService } from './category.service';

@Resolver((of) => Category)
export class CategoriesResolver {
  constructor(private categoryService: CategoryService) {}

  @Query((returns) => Category, { name: 'category', nullable: true })
  async category(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<Category | null> {
    return this.categoryService.category({ id });
  }

  @Query((returns) => [Category], { name: 'categories', nullable: 'items' })
  async categories(
    @Args('skip', { type: () => Int }) skip: number,
    @Args('take', { type: () => Int }) take: number,
  ): Promise<Category[]> {
    return this.categoryService.categories({ skip, take });
  }
}
