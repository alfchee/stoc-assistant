import { Module } from '@nestjs/common';
import { CategoriesResolver } from './categories.resolver';
import { CategoryService } from './category.service';
import { PrismaService } from '../prisma.service';

@Module({
  providers: [CategoriesResolver, CategoryService, PrismaService],
})
export class CategoriesModule {}
