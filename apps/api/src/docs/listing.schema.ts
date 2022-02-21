import { ApiProperty } from '@nestjs/swagger'
import { Listing } from '@prisma/client'
import { ListingAddressDto } from '../listings/dtos/listingAddress.dto'
import { ListingImagesDto } from '../listings/dtos/listingImages.dto'

type ClassFields = Omit<Listing, 'images' | 'addressJson'>
export class ListingDocsSchema implements ClassFields {
  @ApiProperty()
  id: string

  @ApiProperty()
  listingUrl: string

  @ApiProperty()
  name: string

  @ApiProperty()
  summary: string

  @ApiProperty()
  space: string

  @ApiProperty()
  description: string

  @ApiProperty()
  propertyType: string

  @ApiProperty()
  notes: string

  @ApiProperty()
  transit: string

  @ApiProperty()
  roomType: string

  @ApiProperty()
  bedType: string

  @ApiProperty()
  minimumNights: number

  @ApiProperty()
  maximumNights: number

  @ApiProperty()
  cancellationPolicy: string

  @ApiProperty()
  accommodates: number

  @ApiProperty()
  bedrooms: number

  @ApiProperty()
  beds: number

  @ApiProperty()
  bathrooms: number

  @ApiProperty()
  createdAt: Date

  @ApiProperty()
  updatedAt: Date

  @ApiProperty()
  price: number

  @ApiProperty()
  weeklyPrice: number

  @ApiProperty()
  monthlyPrice: number

  @ApiProperty()
  cleaningFee: number

  @ApiProperty()
  amenities: string[]

  @ApiProperty()
  neighborhoodOverview: string

  @ApiProperty()
  access: string

  @ApiProperty()
  interaction: string

  @ApiProperty()
  houseRules: string

  @ApiProperty()
  lastScraped: Date

  @ApiProperty()
  reviewsCount: number

  @ApiProperty()
  images: ListingImagesDto

  @ApiProperty()
  address: string

  @ApiProperty()
  country: string

  @ApiProperty()
  addressJson: ListingAddressDto

  @ApiProperty()
  availability_30: number

  @ApiProperty()
  availability_60: number

  @ApiProperty()
  availability_90: number

  @ApiProperty()
  availability_365: number
}
