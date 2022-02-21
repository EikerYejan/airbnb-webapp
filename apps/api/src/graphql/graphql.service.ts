import { UseGuards } from '@nestjs/common'
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql'
import { AuthGuard } from '../auth/auth.guard'
import {
  ListingsUtilsService,
  UpdateListingData,
  CreateListingData,
  QueryFields,
} from '../listings/listings-utils.service'
import { ListingsService } from '../listings/listings.service'
import { GetListings } from './graphql.typings'

@Resolver('Listing')
export class GraphqlService {
  constructor(
    private readonly listings: ListingsService,
    private readonly util: ListingsUtilsService,
  ) {}

  @Query('listings')
  async listingsQuery(@Args('where') args: GetListings) {
    const page = args?.page ?? 1
    const { data: edges, pageInfo } = await this.listings.list(
      this.util.generateFilters({ ...args, size: args?.size ?? 25, page } as QueryFields),
      page,
    )

    return { pageInfo, edges }
  }

  @Query('listing')
  listSingle(@Args('id') id: string) {
    return this.listings.get({ where: { id } })
  }

  // TODO: Validate address.location.coordinates length and type
  @Mutation('updateListing')
  @UseGuards(AuthGuard)
  updateListing(@Args('id') id: string, @Args('data') data: UpdateListingData) {
    return this.listings.update({
      data: this.util.generateCreateOrUpdatePayload(data),
      where: { id },
    })
  }

  @Mutation('deleteListing')
  @UseGuards(AuthGuard)
  deleteListing(@Args('id') id: string) {
    return this.listings.delete({ where: { id } })
  }

  // TODO: Validate address.location.coordinates length and type
  @Mutation('createListing')
  @UseGuards(AuthGuard)
  createListing(@Args('data') data: CreateListingData) {
    return this.listings.create({ data: this.util.generateCreateOrUpdatePayload(data) })
  }
}
