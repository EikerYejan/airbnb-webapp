import {
  CanActivate,
  ExecutionContext,
  Injectable,
  Logger,
  UnauthorizedException,
} from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { GqlExecutionContext } from '@nestjs/graphql'
import { Request } from 'express'
import { Config } from '../config'

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly config: ConfigService<Config>) {}

  private readonly logger = new Logger('AuthGuard')

  private readonly apiKey = this.config.get<string>('apiKey')

  private readonly whiteListedRoutes = ['/api', '/api/health']

  onModuleInit() {
    this.logger.log('AuthGuard mounted')
  }

  private getRequest(context: ExecutionContext) {
    const type = context.getType()

    if (type === 'http') {
      return context.switchToHttp().getRequest<Request>()
    }

    return GqlExecutionContext.create(context).getContext()?.req
  }

  canActivate(context: ExecutionContext) {
    try {
      const req = this.getRequest(context)

      const { headers, query, path } = req || {}
      const incomingKey = headers?.['x-api-key'] || query?.apiKey

      if (this.whiteListedRoutes.includes(path)) return true

      return typeof this.apiKey === 'string' && incomingKey === this.apiKey
    } catch (error) {
      this.logger.error(error?.message?.toUpperCase())

      throw new UnauthorizedException(error?.message)
    }
  }
}
