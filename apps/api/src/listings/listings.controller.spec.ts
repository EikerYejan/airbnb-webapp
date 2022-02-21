import { createTestingModule } from '../../__tests__/testingModule'
import { ListingsController } from './listings.controller'

jest.mock('./listings.service', () => ({
  ListingsService: function service() {
    return {
      list: jest.fn(() => Promise.resolve([])),
    }
  },
}))

describe('ListingsController', () => {
  let controller: ListingsController

  beforeEach(async () => {
    const app = await createTestingModule().compile()

    controller = app.get<ListingsController>(ListingsController)
  })

  it('Should de defined', async () => {
    expect(controller).toBeDefined()
  })

  it('Should return list', async () => {
    const data = await controller.getListings({ select: ['access', 'accommodates'] })

    expect(data).toBeDefined()
  })
})
