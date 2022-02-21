import { createTestingModule } from '../../__tests__/testingModule'

import { AppService } from './app.service'

describe('AppService', () => {
  let service: AppService

  beforeAll(async () => {
    const app = await createTestingModule().compile()

    service = app.get<AppService>(AppService)
  })

  describe('getData', () => {
    it('should return "Welcome to airbnb-clone-api!"', () => {
      expect(service.getData()).toEqual({
        message: 'Welcome to airbnb-clone-api!',
      })
    })
  })
})
