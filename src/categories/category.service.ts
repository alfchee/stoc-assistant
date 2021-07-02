import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Category, Prisma } from '@prisma/client';
import {
  CategoryCreateInput,
  CategoryUpdateInput,
} from './models/CategoryInputs';

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
      include: {
        Categories: true,
        catalog: true,
      },
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
      include: {
        Categories: true,
        catalog: true,
      },
    });
  }

  async createCategory(data: CategoryCreateInput): Promise<Category> {
    this.logger.log(`Creating category with data ${JSON.stringify(data)}`);
    const { catalogId, ...newData } = data;
    const dataC = {
      ...newData,
      catalog: { connect: { id: catalogId } },
    } as Prisma.CategoryCreateInput;
    // creating the category
    return this.prisma.category.create({
      data: dataC,
      include: { catalog: true },
    });
  }

  async updateCategory(params: {
    where: Prisma.CategoryWhereUniqueInput;
    data: CategoryUpdateInput;
  }): Promise<Category> {
    const { where, data } = params;
    this.logger.log(`Updating category with data ${JSON.stringify(data)}`);
    const { catalogId, ...newData } = data;
    const dataC = {
      ...newData,
      catalog: { connect: { id: catalogId } },
    } as Prisma.CategoryUpdateInput;

    // updating a category
    return this.prisma.category.update({
      data: dataC,
      where,
      include: { catalog: true },
    });
  }

  async deleteCategory(
    where: Prisma.CategoryWhereUniqueInput,
  ): Promise<Category> {
    this.logger.log(`Deleting category with criteria ${JSON.stringify(where)}`);

    // deleting a category
    return this.prisma.category.delete({ where });
  }
}
