import { Injectable } from '@nestjs/common'
import { Listing, Prisma } from '@prisma/client'
import { ListingOrderBy, CreateListing } from '../graphql/graphql.typings'
import { removeUndefinedEntries } from '../utils'
import { GetListingsDto } from './dtos/getListings.dto'

type ListingKey = keyof Listing

export type QueryFields = Partial<Omit<GetListingsDto, 'select'>> & {
  select?: Array<ListingKey | ListingOrderBy>
}

export type CreateListingData = Omit<CreateListing, 'images' | 'addressJson'> & {
  images: Listing['images']
  addressJson: Listing['addressJson']
}
export type UpdateListingData = Partial<CreateListingData>

@Injectable()
export class ListingsUtilsService {
  private allowedSelectFields: Array<ListingKey | ListingOrderBy> = [
    'id',
    'listingUrl',
    'name',
    'summary',
    'space',
    'description',
    'propertyType',
    'notes',
    'transit',
    'roomType',
    'bedType',
    'minimumNights',
    'maximumNights',
    'cancellationPolicy',
    'accommodates',
    'bedrooms',
    'beds',
    'reviewsCount',
    'bathrooms',
    'amenities',
    'neighborhoodOverview',
    'access',
    'interaction',
    'houseRules',
    'lastScraped',
    'createdAt',
    'updatedAt',
    'id',
    'price',
    'weeklyPrice',
    'monthlyPrice',
    'cleaningFee',
    'images',
    'address',
    'country',
    'availability_30',
    'availability_90',
    'availability_60',
    'availability_365',
  ]

  generatePagination(size = 0, page = 1) {
    return size * (page && page > 0 ? page - 1 : page)
  }

  generateQueryFilters({
    bedrooms,
    beds,
    bathrooms,
    minimumNights,
    maximumNights,
    propertyType,
    name,
    price,
    weeklyPrice,
    monthlyPrice,
    cleaningFee,
    address,
    country,
    availability_30,
    availability_60,
    availability_90,
    availability_365,
  }: QueryFields): Prisma.ListingWhereInput {
    return removeUndefinedEntries({
      bedrooms,
      beds,
      bathrooms,
      minimumNights,
      maximumNights,
      propertyType,
      price,
      weeklyPrice,
      monthlyPrice,
      cleaningFee,
      availability_30,
      availability_60,
      availability_90,
      availability_365,
      name: typeof name === 'string' ? { contains: name } : name,
      address: typeof address === 'string' ? { contains: address } : address,
      country: typeof country === 'string' ? { contains: country } : country,
    })
  }

  validateOrderBy(value?: ListingKey | ListingOrderBy) {
    return !!value && this.allowedSelectFields.includes(value)
  }

  validateSelectFields(fields: ListingKey[] = []) {
    const invalidFields = fields.filter((field) => !this.allowedSelectFields.includes(field))

    if (invalidFields && invalidFields?.length > 0) return false

    return true
  }

  validateFilterOperator(operator: string) {
    const validOperators = [
      'lt',
      'lte',
      'gt',
      'gte',
      'contains',
      'startsWith',
      'endsWith',
      'equals',
    ]

    return validOperators.includes(operator)
  }

  generateQuerySelect(fields?: ListingKey[]) {
    if (!fields || fields?.length <= 0 || !this.validateSelectFields(fields)) return undefined

    return fields.reduce((obj, field) => ({ ...obj, [field]: true }), {})
  }

  generateOrderBy(sortField?: ListingKey | ListingOrderBy, order?: string) {
    if (!sortField || !order || !this.validateOrderBy(sortField)) return undefined

    return { [sortField]: order }
  }

  generateFilters(query: QueryFields) {
    const { order, orderBy } = query

    return removeUndefinedEntries<Partial<Prisma.ListingFindManyArgs>>({
      take: query.size,
      skip: this.generatePagination(query.size, query.page),
      where: this.generateQueryFilters(query),
      select: this.generateQuerySelect(query?.select),
      orderBy: this.generateOrderBy(orderBy, order),
    })
  }

  generateQueryPageInfo(pageItemsCount: number, allItemsCount: number, size: number, page: number) {
    const totalPages = Math.ceil(allItemsCount / size)

    return {
      page,
      totalPages,
      count: pageItemsCount,
      totalItems: allItemsCount,
      hasNextPage: page < totalPages,
      hasPreviousPage: page > 1,
    }
  }

  generateCreateOrUpdatePayload(data: CreateListingData | UpdateListingData) {
    return {
      ...data,
      addressJson: {
        ...(typeof data.addressJson === 'object' ? data.addressJson : {}),
        country: data.country,
        street: data.address,
      },
    } as Prisma.ListingCreateInput
  }
}
