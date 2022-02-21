import { ApiPropertyOptional } from '@nestjs/swagger'
import { Listing, Prisma } from '@prisma/client'
import { Transform } from 'class-transformer'
import {
  ArrayUnique,
  IsArray,
  IsNumber,
  IsOptional,
  IsString,
  Validate,
  IsEnum,
  IsDate,
} from 'class-validator'
import { ListingOrderBy, Order } from '../../graphql/graphql.typings'
import { IsValidFilter } from './isValidFilter'
import { IsValidOrderByField } from './validateOrderByFields'
import { IsValidSelectField } from './validateSelectFields'

export enum SortOrder {
  ASC = 'asc',
  DESC = 'desc',
}

type TransformerResult = Prisma.IntFilter | Prisma.StringFilter | string | number | undefined
type Transformer = (v: string) => TransformerResult

// TODO: move to a separate file
export function transformFilter<T extends Transformer>(
  filter?: string,
  transformer?: T,
): TransformerResult {
  if (!filter || filter.length < 0) return undefined
  const [a, b] = filter.split('_')

  if (!b && !!a) return transformer ? transformer(a) : a

  // Number range
  if (a === 'in') {
    const [rangeStart, rangeEnd] = b.split('-').map(Number)

    return { gte: rangeStart, lte: rangeEnd }
  }

  const parsedB = transformer ? transformer(b) : b

  return { [a]: parsedB }
}

type DTOFields = Partial<Pick<Listing, 'propertyType' | 'createdAt' | 'updatedAt'>>
export class GetListingsDto implements DTOFields {
  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    name: 'name',
    type: 'StringFilter',
    example: 'contains_{name}',
  })
  name?: string | Prisma.StringFilter

  @ApiPropertyOptional({
    name: 'minimumNights',
    type: 'IntFilter',
    example: 'lte_{minimumNights}',
  })
  @Transform(({ value }) => transformFilter(value, Number))
  @Validate(IsValidFilter)
  @IsOptional()
  minimumNights?: Prisma.IntFilter | number

  @ApiPropertyOptional({
    name: 'maximumNights',
    type: 'IntFilter',
    example: 'lt_{maximumNights}',
  })
  @Transform(({ value }) => transformFilter(value, Number))
  @Validate(IsValidFilter)
  @IsOptional()
  maximumNights?: Prisma.IntFilter | number

  @ApiPropertyOptional({
    name: 'bedrooms',
    type: 'IntFilter',
  })
  @Transform(({ value }) => transformFilter(value, Number))
  @Validate(IsValidFilter)
  @IsOptional()
  bedrooms?: Prisma.IntFilter | number

  @ApiPropertyOptional({
    name: 'beds',
    type: 'IntFilter',
  })
  @Transform(({ value }) => transformFilter(value, Number))
  @Validate(IsValidFilter)
  @IsOptional()
  beds?: Prisma.IntFilter | number

  @ApiPropertyOptional({
    name: 'bathrooms',
    type: 'IntFilter',
  })
  @Transform(({ value }) => transformFilter(value, Number))
  @Validate(IsValidFilter)
  @IsOptional()
  bathrooms?: Prisma.IntFilter | number

  @IsString()
  @IsOptional()
  propertyType?: string

  @ApiPropertyOptional({
    name: 'price',
    type: 'IntFilter',
  })
  @Transform(({ value }) => transformFilter(value, Number))
  @Validate(IsValidFilter)
  @IsOptional()
  price?: Prisma.IntFilter | number

  @ApiPropertyOptional({
    name: 'weeklyPrice',
    type: 'IntFilter',
  })
  @Transform(({ value }) => transformFilter(value, Number))
  @Validate(IsValidFilter)
  @IsOptional()
  weeklyPrice?: Prisma.IntFilter | number

  @ApiPropertyOptional({
    name: 'monthlyPrice',
    type: 'IntFilter',
  })
  @Transform(({ value }) => transformFilter(value, Number))
  @Validate(IsValidFilter)
  @IsOptional()
  monthlyPrice?: Prisma.IntFilter | number

  @ApiPropertyOptional({
    name: 'cleaningFee',
    type: 'IntFilter',
  })
  @Transform(({ value }) => transformFilter(value, Number))
  @Validate(IsValidFilter)
  @IsOptional()
  cleaningFee?: Prisma.IntFilter | number

  @ApiPropertyOptional({
    name: 'select',
    type: 'string',
    example: ['name', 'id'],
  })
  @Transform(({ value }) => value?.split(','))
  @IsArray()
  @ArrayUnique()
  @IsOptional()
  @Validate(IsValidSelectField)
  select?: Array<keyof Listing>

  @ApiPropertyOptional({
    name: 'orderBy',
    type: 'ListingOrderBy',
    enum: ListingOrderBy,
  })
  @IsString()
  @IsOptional()
  @Validate(IsValidOrderByField)
  orderBy?: keyof Listing | ListingOrderBy

  @ApiPropertyOptional({
    name: 'order',
    type: 'SortOrder',
    enum: SortOrder,
  })
  @IsString()
  @IsOptional()
  @IsEnum(SortOrder)
  order?: SortOrder | Order

  @ApiPropertyOptional({
    name: 'createdAt',
    type: 'Date',
  })
  @IsDate()
  @IsOptional()
  createdAt?: Date

  @ApiPropertyOptional({
    name: 'updatedAt',
    type: 'Date',
  })
  @IsDate()
  @IsOptional()
  updatedAt?: Date

  @ApiPropertyOptional({
    name: 'address',
    type: 'StringFilter',
    example: 'startsWith_{address}',
  })
  @Transform(({ value }) => transformFilter(value))
  @Validate(IsValidFilter)
  @IsOptional()
  address?: Prisma.StringFilter | string

  @ApiPropertyOptional({
    name: 'country',
    type: 'StringFilter',
  })
  @Transform(({ value }) => transformFilter(value))
  @Validate(IsValidFilter)
  @IsOptional()
  country?: Prisma.StringFilter | string

  @Transform(({ value }) => transformFilter(value, Number))
  @Validate(IsValidFilter)
  @IsOptional()
  availability_30?: Prisma.IntFilter | number

  @Transform(({ value }) => transformFilter(value, Number))
  @Validate(IsValidFilter)
  @IsOptional()
  availability_60?: Prisma.IntFilter | number

  @Transform(({ value }) => transformFilter(value, Number))
  @Validate(IsValidFilter)
  @IsOptional()
  availability_90?: Prisma.IntFilter | number

  @Transform(({ value }) => transformFilter(value, Number))
  @Validate(IsValidFilter)
  @IsOptional()
  availability_365?: Prisma.IntFilter | number

  @IsOptional()
  size?: number

  @IsNumber()
  @IsOptional()
  page?: number
}
