import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Product, Prisma } from '@prisma/client';
import {
  ProductCreateInput,
  ProductUpdateInput,
} from './models/product.inputs';

@Injectable()
export class ProductService {
  private readonly logger = new Logger(ProductService.name);

  constructor(private prisma: PrismaService) {}

  async product(
    productWhereUniqueInput: Prisma.ProductWhereUniqueInput,
  ): Promise<Product | null> {
    this.logger.log(
      `Getting product with criteria ${JSON.stringify(
        productWhereUniqueInput,
      )}`,
    );

    return this.prisma.product.findUnique({
      where: productWhereUniqueInput,
      include: {
        Category: true,
        Brand: true,
      },
    });
  }

  async products(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.ProductWhereUniqueInput;
    where?: Prisma.ProductWhereInput;
    orderBy?: Prisma.ProductOrderByInput;
  }): Promise<Product[]> {
    const { skip, take, cursor, where, orderBy } = params;

    this.logger.log(`Getting products from ${skip} to ${take}`);

    return this.prisma.product.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
      include: {
        Category: {
          select: { id: true, name: true },
        },
        Brand: {
          select: { id: true, name: true },
        },
      },
    });
  }

  async createProduct(data: ProductCreateInput) {
    this.logger.log(`Creating product with data ${JSON.stringify(data)}`);
    const { brandId, categoryId, ...newData } = data;
    const dataC = {
      ...newData,
      Brand: { connect: { id: brandId } },
      Category: { connect: { id: categoryId } },
    } as Prisma.ProductCreateInput;

    return this.prisma.product.create({
      data: dataC,
      include: { Category: true, Brand: true },
    });
  }

  async updateProduct(params: {
    where: Prisma.ProductWhereUniqueInput;
    data: ProductUpdateInput;
  }): Promise<Product> {
    const { where, data } = params;
    this.logger.log(`Updating product with data ${JSON.stringify(data)}`);

    const dataC = {
      ...data,
      Brand: { connect: { id: data.brandId } },
      Category: { connect: { id: data.categoryId } },
    } as Prisma.ProductUpdateInput;

    return this.prisma.product.update({ data: dataC, where });
  }

  async deleteProduct(where: Prisma.ProductWhereUniqueInput): Promise<Product> {
    this.logger.log(`Deleting product with criteria ${JSON.stringify(where)}`);

    return this.prisma.product.delete({ where });
  }
}
