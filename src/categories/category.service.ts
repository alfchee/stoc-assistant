import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Category, Prisma } from '@prisma/client';

@Injectable()
export class CategoryService {
  private readonly logger = new Logger(CategoryService.name);

  constructor(private prisma: PrismaService) {}

  async category(
    categoryWhereUniqueInput: Prisma.CategoryWhereUniqueInput,
  ): Promise<Category | null> {
    this.logger.log(
      `Searching a category with criteria ${JSON.stringify(
        categoryWhereUniqueInput,
      )}`,
    );

    // finding the category using prisma
    return this.prisma.category.findUnique({
      where: categoryWhereUniqueInput,
    });
  }

  async categories(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.CategoryWhereUniqueInput;
    where?: Prisma.CategoryWhereInput;
    orderBy?: Prisma.CategoryOrderByInput;
  }): Promise<Category[]> {
    const { skip, take, cursor, where, orderBy } = params;

    this.logger.log(`Getting list of categories from ${skip} to ${take}`);

    return this.prisma.category.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createCategory(data: Prisma.CategoryCreateInput): Promise<Category> {
    this.logger.log(`Creating category with data ${JSON.stringify(data)}`);
    // creating the category
    return this.prisma.category.create({ data });
  }

  async updateCategory(params: {
    where: Prisma.CategoryWhereUniqueInput;
    data: Prisma.CategoryUpdateInput;
  }): Promise<Category> {
    const { where, data } = params;
    this.logger.log(`Updating category with data ${JSON.stringify(data)}`);

    return this.prisma.category.update({ data, where });
  }

  async deleteCategory(
    where: Prisma.CategoryWhereUniqueInput,
  ): Promise<Category> {
    this.logger.log(`Deleting category with criteria ${JSON.stringify(where)}`);
    return this.prisma.category.delete({ where });
  }
}
