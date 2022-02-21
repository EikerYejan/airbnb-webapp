import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import * as morgan from 'morgan'
import * as statusMonitor from 'express-status-monitor'
import { AppModule } from './app/app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const globalPrefix = 'api'
  const port = process.env.PORT || 3333

  const swaggerConfig = new DocumentBuilder()
    .addApiKey(
      {
        type: 'apiKey',
        name: 'x-api-key',
        in: 'header',
      },
      'x-api-key',
    )
    .setTitle('Airbnb clone API')
    .setDescription('A NestJS API using Prisma and MongoDB')
    .setVersion(process.env.npm_package_version ?? '0.1.0')
    .addTag('listings')
    .build()

  app.setGlobalPrefix(globalPrefix)

  app.use(
    statusMonitor({
      title: 'Airbnb clone API - Status',
      path: '/api/status',
      healthChecks: [{ path: '/api/health', protocol: 'http', host: 'localhost', port }],
    }),
  )
  app.use(morgan('combined'))

  const document = SwaggerModule.createDocument(app, swaggerConfig, { ignoreGlobalPrefix: false })
  SwaggerModule.setup('/api/docs', app, document)

  const server = await app.listen(port)

  server.setTimeout(30000)

  Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`)
}

bootstrap()
