import { createTestingModule } from '../../__tests__/testingModule'
import { AppController } from './app.controller'

describe('AppController', () => {
  let controller: AppController

  beforeEach(async () => {
    const app = await createTestingModule().compile()

    controller = app.get<AppController>(AppController)
  })

  it('should return "Welcome to airbnb-clone-api!"', () => {
    expect(controller.getData()).toEqual({
      message: 'Welcome to airbnb-clone-api!',
    })
  })

  it('Should return health status', async () => {
    const data = await controller.checkHealth()

    expect(data.status).toEqual('ok')
    expect(data.env).toHaveProperty('node-version')
    expect(data.env).toHaveProperty('appName')
    expect(data.env).toHaveProperty('appVersion')
  })
})
