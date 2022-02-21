import {
  Controller,
  Get,
  HttpException,
  Query,
  Logger,
  Param,
  Delete,
  Patch,
  Body,
  UsePipes,
  ValidationPipe,
  Post,
  UseGuards,
} from '@nestjs/common'
import { ApiResponse, ApiSecurity } from '@nestjs/swagger'
import { AuthGuard } from '../auth/auth.guard'
import { ListingDocsSchema } from '../docs/listing.schema'
import { CreateListingDto } from './dtos/createListing.dto'
import { GetListingsDto } from './dtos/getListings.dto'
import { UpdateListingDto } from './dtos/updateListing.dto'
import { ListingsUtilsService } from './listings-utils.service'
import { ListingsService } from './listings.service'

@Controller('listings')
@ApiSecurity('x-api-key', ['x-api-key'])
export class ListingsController {
  constructor(
    private readonly listingsService: ListingsService,
    private readonly util: ListingsUtilsService,
  ) {}

  private logger = new Logger('ListingsController')

  @Get()
  @ApiResponse({ status: 200, type: () => ListingDocsSchema })
  @UsePipes(
    new ValidationPipe({ transform: true, transformOptions: { enableImplicitConversion: true } }),
  )
  async getListings(@Query() query: GetListingsDto) {
    try {
      const page = query?.page ?? 1
      const response = await this.listingsService.list(
        this.util.generateFilters({ ...query, size: query?.size ?? 25, page }),
        page,
      )

      return {
        statusCode: 200,
        ...response,
      }
    } catch (error) {
      this.logger.error(error)

      throw new HttpException(error?.message, error.status || 500)
    }
  }

  @ApiResponse({ status: 200, type: () => ListingDocsSchema })
  @Get('/:id')
  async getListing(@Param('id') id: string) {
    try {
      const data = await this.listingsService.get({ where: { id } })

      if (!data) throw new HttpException('Listing not found', 404)

      return {
        statusCode: 200,
        data,
      }
    } catch (error) {
      this.logger.error(error)

      throw new HttpException(error?.message, error.status || 500)
    }
  }

  @Patch('/:id')
  @UseGuards(AuthGuard)
  @UsePipes(
    new ValidationPipe({
      transform: true,
      forbidNonWhitelisted: true,
      whitelist: true,
    }),
  )
  async updateListing(@Body() listing: UpdateListingDto, @Param('id') id: string) {
    try {
      const response = await this.listingsService.update({
        data: this.util.generateCreateOrUpdatePayload(listing),
        where: { id },
      })

      return {
        statusCode: 200,
        response,
      }
    } catch (error) {
      this.logger.error(error)

      throw new HttpException(error?.message, error.status || 500)
    }
  }

  @UseGuards(AuthGuard)
  @Delete('/:id')
  async deleteListing(@Param('id') id: string) {
    try {
      const data = await this.listingsService.delete({ where: { id } })

      return {
        statusCode: 200,
        data,
      }
    } catch (error) {
      this.logger.error(error)

      throw new HttpException(error, error.status || 500)
    }
  }

  @Post()
  @UsePipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  )
  @UseGuards(AuthGuard)
  async createListing(@Body() listing: CreateListingDto) {
    try {
      const response = await this.listingsService.create({
        data: this.util.generateCreateOrUpdatePayload(listing),
      })

      return {
        statusCode: 200,
        data: response,
      }
    } catch (error) {
      this.logger.error(error)

      throw new HttpException(error?.message, error.status || 500)
    }
  }
}
