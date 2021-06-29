import { Module } from '@nestjs/common';
import { BrandResolver } from './brand.resolver';
import { BrandService } from './brand.service';
import { PrismaService } from '../prisma.service';

@Module({
  providers: [BrandResolver, BrandService, PrismaService],
})
export class BrandModule {}
