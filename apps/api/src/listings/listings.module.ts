import { Module } from '@nestjs/common'
import { GraphqlService } from '../graphql/graphql.service'
import { PrismaService } from '../prisma/prisma.service'
import { ListingsUtilsService } from './listings-utils.service'
import { ListingsController } from './listings.controller'
import { ListingsService } from './listings.service'

@Module({
  controllers: [ListingsController],
  providers: [GraphqlService, ListingsService, PrismaService, ListingsUtilsService],
})
export class ListingsModule {}
