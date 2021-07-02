import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CatalogResolver } from './catalog.resolver';
import { CatalogService } from './catalog.service';

@Module({
  providers: [PrismaService, CatalogResolver, CatalogService],
})
export class CatalogModule {}
