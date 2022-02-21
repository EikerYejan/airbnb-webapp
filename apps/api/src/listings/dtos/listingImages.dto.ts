import { IsNotEmpty, IsOptional, IsString } from 'class-validator'

type Fields = {
  thumbnail_url: string
  picture_url: string
}

export class ListingImagesDto implements Fields {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  thumbnail_url: string

  @IsString()
  @IsNotEmpty()
  picture_url: string
}
