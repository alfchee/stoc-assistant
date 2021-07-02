import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Catalog, Prisma } from '@prisma/client';
import {
  CatalogCreateInput,
  CatalogUpdateInput,
} from './models/catalog.inputs';

@Injectable()
export class CatalogService {
  private readonly logger = new Logger(CatalogService.name);

  constructor(private prisma: PrismaService) {}

  async catalog(
    catalogWhereUniqueInput: Prisma.CatalogWhereUniqueInput,
  ): Promise<Catalog | null> {
    this.logger.log(
      `Getting Catalog with criteria ${JSON.stringify(
        catalogWhereUniqueInput,
      )}`,
    );

    return this.prisma.catalog.findUnique({
      where: catalogWhereUniqueInput,
      include: {
        categories: true,
      },
    });
  }

  async catalogs(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.CatalogWhereUniqueInput;
    where?: Prisma.CatalogWhereInput;
    orderBy?: Prisma.CatalogOrderByInput;
  }): Promise<Catalog[]> {
    const { skip, take, cursor, where, orderBy } = params;

    this.logger.log(`Getting catalogs from ${skip} to ${take} where ${where}`);

    return this.prisma.catalog.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
      include: {
        categories: true,
      },
    });
  }

  async createCatalog(data: CatalogCreateInput): Promise<Catalog> {
    this.logger.log(`Creating a catalog with data: ${JSON.stringify(data)}`);
    const dataC = <Prisma.CatalogCreateInput>data;

    return this.prisma.catalog.create({
      data: dataC,
      include: { categories: true },
    });
  }

  async updateCatalog(params: {
    where: Prisma.CatalogWhereUniqueInput;
    data: CatalogUpdateInput;
  }): Promise<Catalog> {
    const { where, data } = params;
    const dataC = <Prisma.CatalogUpdateInput>data;
    this.logger.log(`Updating catalog with data ${JSON.stringify(data)}`);

    return this.prisma.catalog.update({
      data: dataC,
      where,
      include: { categories: true },
    });
  }

  async deleteCatalog(where: Prisma.CatalogWhereUniqueInput): Promise<Catalog> {
    this.logger.log(`Deleting catalog with criteria ${JSON.stringify(where)}`);

    return this.prisma.catalog.delete({ where });
  }
}
