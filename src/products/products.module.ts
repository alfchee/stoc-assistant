import { Module } from '@nestjs/common';
import { ProductResolver } from './product.resolver';
import { PrismaService } from '../prisma.service';
import { ProductService } from './product.service';

@Module({
  providers: [ProductResolver, ProductService, PrismaService],
})
export class ProductsModule {}
