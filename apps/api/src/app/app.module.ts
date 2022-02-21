import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { ThrottlerModule } from '@nestjs/throttler'
import { TerminusModule } from '@nestjs/terminus'
import { APP_GUARD } from '@nestjs/core'
import { HttpModule } from '@nestjs/axios'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver } from '@nestjs/apollo'
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core'
import { join } from 'path'
import { ListingsModule } from '../listings/listings.module'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { loadConfig } from '../config'
import { DateScalar } from '../graphql/date.scalar'
import { AppThrottlerGuard } from '../throttler/throttler.guard'

const appDir = process.cwd()
const envFilePath = join(appDir, '.env')

@Module({
  imports: [
    ListingsModule,
    HttpModule,
    TerminusModule,
    ConfigModule.forRoot({ isGlobal: true, envFilePath, load: [loadConfig] }),
    ThrottlerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        ttl: config.get('throttleTtl'),
        limit: config.get('throttleLimit'),
      }),
    }),
    DateScalar,
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      playground: false,
      useGlobalPrefix: true,
      typePaths: [join(appDir, './src/graphql/listings.graphql')],
      definitions: {
        path: join(appDir, './src/graphql/graphql.typings.ts'),
        outputAs: 'class',
        emitTypenameField: true,
        customScalarTypeMapping: {
          Date: 'Date',
        },
      },
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
  ],
  controllers: [AppController],
  providers: [AppService, { provide: APP_GUARD, useClass: AppThrottlerGuard }],
})
export class AppModule {}
