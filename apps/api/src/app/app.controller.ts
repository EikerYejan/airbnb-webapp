import { Controller, Get } from '@nestjs/common'
import { HealthCheck, HealthCheckService, HttpHealthIndicator } from '@nestjs/terminus'
import { AppService } from './app.service'

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly health: HealthCheckService,
    private readonly httpHealth: HttpHealthIndicator,
  ) {}

  @Get()
  getData() {
    return this.appService.getData()
  }

  @Get('/health')
  @HealthCheck()
  async checkHealth() {
    const result = await this.health.check([
      () => this.httpHealth.pingCheck('nestjs-docs', 'https://docs.nestjs.com'),
    ])

    return {
      ...result,
      env: {
        'node-version': process.version,
        memory: process.memoryUsage(),
        pid: process.pid,
        uptime: process.uptime(),
        environment: process.env.NODE_ENV,
        appName: process.env.APP_NAME,
        appVersion: process.env.npm_package_version,
        hostname: process.env.HOSTNAME,
      },
    }
  }
}
