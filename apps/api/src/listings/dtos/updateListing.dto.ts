import { Listing } from '@prisma/client'
import { Type } from 'class-transformer'
import {
  ArrayUnique,
  IsArray,
  IsNotEmptyObject,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
  ValidateNested,
} from 'class-validator'
import { ListingAddressDto } from './listingAddress.dto'
import { ListingImagesDto } from './listingImages.dto'

export class UpdateListingDto implements Partial<Omit<Listing, 'id'>> {
  @IsString()
  @IsOptional()
  listingUrl?: string

  @IsString()
  @IsOptional()
  name?: string

  @IsString()
  @IsOptional()
  summary?: string

  @IsString()
  @IsOptional()
  space?: string

  @IsString()
  @IsOptional()
  description?: string

  @IsString()
  @IsOptional()
  propertyType?: string

  @IsString()
  @IsOptional()
  notes?: string

  @IsString()
  @IsOptional()
  transit?: string

  @IsString()
  @IsOptional()
  roomType?: string

  @IsString()
  @IsOptional()
  bedType?: string

  @IsNumber()
  @IsOptional()
  minimumNights?: number

  @IsNumber()
  @IsOptional()
  maximumNights?: number

  @IsString()
  @IsOptional()
  cancelationPolicy?: string

  @IsNumber()
  @IsOptional()
  accommodates?: number

  @IsNumber()
  @IsOptional()
  bedrooms?: number

  @IsNumber()
  @IsOptional()
  beds?: number

  @IsNumber()
  @IsOptional()
  bathrooms?: number

  @IsArray()
  @ArrayUnique()
  @IsOptional()
  amenities?: string[]

  @IsString()
  @IsOptional()
  neighborhoodOverview?: string

  @IsString()
  @IsOptional()
  access?: string

  @IsString()
  @IsOptional()
  interaction?: string

  @IsString()
  @IsOptional()
  houseRules: string

  @IsNumber()
  @IsOptional()
  reviewsCount?: number

  @IsNumber()
  @IsOptional()
  price?: number

  @IsNumber()
  @IsOptional()
  weeklyPrice?: number

  @IsNumber()
  @IsOptional()
  monthlyPrice?: number

  @IsNumber()
  @IsOptional()
  cleaningFee?: number

  @IsNotEmptyObject()
  @ValidateNested()
  @IsOptional()
  @Type(() => ListingAddressDto)
  address?: Listing['address']

  @IsNotEmptyObject()
  @ValidateNested()
  @IsOptional()
  @Type(() => ListingImagesDto)
  images?: Listing['images']

  @IsNumber()
  @Min(1)
  @Max(30)
  availability_30: number

  @Min(1)
  @Max(60)
  availability_60: number

  @Min(1)
  @Max(90)
  availability_90: number

  @Min(1)
  @Max(365)
  availability_365: number
}
