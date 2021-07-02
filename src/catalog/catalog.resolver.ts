import { Resolver, Query, Args, Int, Mutation } from '@nestjs/graphql';
import { Catalog } from './models/catalog.model';
import { CatalogService } from './catalog.service';
import {
  CatalogCreateInput,
  CatalogUpdateInput,
} from './models/catalog.inputs';
import { CatalogWhere } from './models/catalog.where';

@Resolver((of) => Catalog)
export class CatalogResolver {
  constructor(private catalogService: CatalogService) {}

  @Query((returns) => Catalog, { name: 'catalog', nullable: true })
  async catalog(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<Catalog | null> {
    return this.catalogService.catalog({ id });
  }

  @Query((returns) => [Catalog], { name: 'catalogs', nullable: 'items' })
  async catalogs(
    @Args('skip', { type: () => Int }) skip: number,
    @Args('take', { type: () => Int }) take: number,
  ): Promise<Catalog[]> {
    return this.catalogService.catalogs({ skip, take });
  }

  @Mutation((returns) => Catalog, { name: 'createCatalog' })
  async createCatalog(
    @Args('catalog') catalog: CatalogCreateInput,
  ): Promise<Catalog> {
    return this.catalogService.createCatalog(catalog);
  }

  @Mutation((returns) => Catalog, { name: 'updateCatalog' })
  async updateCatalog(
    @Args('where') where: CatalogWhere,
    @Args('data') data: CatalogUpdateInput,
  ): Promise<Catalog> {
    return this.catalogService.updateCatalog({ where, data });
  }

  @Mutation((returns) => Catalog, { name: 'deleteCatalog' })
  async deleteCatalog(@Args('where') where: CatalogWhere) {
    return this.catalogService.deleteCatalog(where);
  }
}
