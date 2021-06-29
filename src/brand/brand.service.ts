import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Brand, Prisma } from '@prisma/client';

@Injectable()
export class BrandService {
  private readonly logger = new Logger(BrandService.name);

  constructor(private prisma: PrismaService) {}

  async brand(
    brandWhereUniqueInput: Prisma.BrandWhereUniqueInput,
  ): Promise<Brand | null> {
    this.logger.log(
      `Searching a brand with criteria ${JSON.stringify(
        brandWhereUniqueInput,
      )}`,
    );

    // finding the brand using prisma
    return this.prisma.brand.findUnique({ where: brandWhereUniqueInput });
  }

  async brands(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.BrandWhereUniqueInput;
    where?: Prisma.BrandWhereInput;
    orderBy?: Prisma.BrandOrderByInput;
  }): Promise<Brand[]> {
    const { skip, take, cursor, where, orderBy } = params;

    this.logger.log(`Getting list of brands from ${skip} to ${take}`);

    return this.prisma.brand.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createBrand(data: Prisma.BrandCreateInput): Promise<Brand> {
    this.logger.log(`Creating brand with data: ${JSON.stringify(data)}`);

    return this.prisma.brand.create({ data });
  }

  async updateBrand(params: {
    where: Prisma.BrandWhereUniqueInput;
    data: Prisma.BrandUpdateInput;
  }): Promise<Brand> {
    const { where, data } = params;
    this.logger.log(`Updating brand with data ${JSON.stringify(data)}`);

    return this.prisma.brand.update({ data, where });
  }

  async deleteBrand(where: Prisma.BrandWhereUniqueInput): Promise<Brand> {
    this.logger.log(`Deleting brand with criteria ${JSON.stringify(where)}`);

    return this.prisma.brand.delete({ where });
  }
}
