import { createTestingModule } from '../../__tests__/testingModule'
import { ListingsService } from './listings.service'

const testMethods: (keyof ListingsService)[] = ['list', 'get', 'update', 'create', 'delete']

describe('ListingsService', () => {
  let service: ListingsService

  beforeEach(async () => {
    const module = await createTestingModule().compile()

    service = module.get<ListingsService>(ListingsService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })

  testMethods.forEach((method) => {
    it(`${method} should return data`, async () => {
      const data = await service[method]({ where: { id: 'id' }, data: {} } as any, 1)

      expect(data).toBeDefined()
    })
  })
})
