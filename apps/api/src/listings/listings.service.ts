import { Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { PrismaService } from '../prisma/prisma.service'
import { ListingsUtilsService } from './listings-utils.service'

@Injectable()
export class ListingsService {
  constructor(private readonly db: PrismaService, private readonly utils: ListingsUtilsService) {}

  async list(args: Prisma.ListingFindManyArgs, page: number) {
    const [data, count] = await this.db.$transaction([
      this.db.listing.findMany(args),
      this.db.listing.count({ where: args.where }),
    ])

    return {
      pageInfo: this.utils.generateQueryPageInfo(data.length, count, args?.take || 25, page),
      data,
    }
  }

  get(args: Prisma.ListingFindUniqueArgs) {
    return this.db.listing.findUnique(args)
  }

  update(args: Prisma.ListingUpdateArgs) {
    return this.db.listing.update(args)
  }

  create(args: Prisma.ListingCreateArgs) {
    return this.db.listing.create(args)
  }

  delete(args: Prisma.ListingDeleteArgs) {
    return this.db.listing.delete(args)
  }
}
