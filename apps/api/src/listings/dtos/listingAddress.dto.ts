/* eslint-disable max-classes-per-file */
import { Type } from 'class-transformer'
import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
  ValidateNested,
} from 'class-validator'

export enum LocationType {
  POINT = 'Point',
}

class ListingLocationDto {
  @IsEnum(LocationType)
  type: LocationType

  @IsBoolean()
  is_location_exact: boolean

  @IsArray()
  @ArrayMinSize(2)
  @ArrayMaxSize(2)
  @IsNumber({}, { each: true })
  coordinates: number[]
}

export class ListingAddressDto {
  @IsString()
  @IsNotEmpty()
  suburb: string

  @IsString()
  @IsNotEmpty()
  government_area: string

  @IsString()
  @IsNotEmpty()
  market: string

  @IsString()
  @IsNotEmpty()
  country_code: string

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => ListingLocationDto)
  location: ListingLocationDto
}
