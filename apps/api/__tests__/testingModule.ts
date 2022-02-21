import { HttpModule } from '@nestjs/axios'
import { ConfigModule } from '@nestjs/config'
import { TerminusModule } from '@nestjs/terminus'
import { Test } from '@nestjs/testing'
import { AppController } from '../src/app/app.controller'
import { AppService } from '../src/app/app.service'
import { AuthGuard } from '../src/auth/auth.guard'
import { Config } from '../src/config'
import { ListingsModule } from '../src/listings/listings.module'

export const testApiKey = 'TEST_API_KEY'

const loadConfig = () => ({ apiKey: testApiKey } as Config)

export const createTestingModule = () => {
  return Test.createTestingModule({
    imports: [
      ListingsModule,
      HttpModule,
      TerminusModule,
      ConfigModule.forRoot({ isGlobal: true, load: [loadConfig] }),
    ],
    controllers: [AppController],
    providers: [AppService, AuthGuard],
  })
}
