import { ExecutionContext, Injectable } from '@nestjs/common'
import { GqlExecutionContext } from '@nestjs/graphql'
import { ThrottlerException, ThrottlerGuard } from '@nestjs/throttler'
import { Request } from 'express'

@Injectable()
export class AppThrottlerGuard extends ThrottlerGuard {
  private getRemoteAddress(ctx: ExecutionContext): string {
    const type = ctx.getType()

    if (type === 'http') {
      return ctx.switchToHttp().getRequest<Request>().ip
    }

    return GqlExecutionContext.create(ctx).getContext()?.req?.ip
  }

  async handleRequest(context: ExecutionContext, limit: number, ttl: number): Promise<boolean> {
    const ip = this.getRemoteAddress(context)
    const key = this.generateKey(context, ip)
    const ttls = await this.storageService.getRecord(key)

    if (ttls.length >= limit) {
      throw new ThrottlerException()
    }

    await this.storageService.addRecord(key, ttl)

    return true
  }
}
