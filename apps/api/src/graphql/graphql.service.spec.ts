import { createTestingModule } from '../../__tests__/testingModule'
import { GraphqlService } from './graphql.service'

jest.mock('../listings/listings.service', () => ({
  ListingsService: function service() {
    return {
      list: jest.fn(() => Promise.resolve({ data: [] })),
    }
  },
}))

describe('GraphqlService', () => {
  let service: GraphqlService

  beforeEach(async () => {
    const module = await createTestingModule().compile()

    service = module.get<GraphqlService>(GraphqlService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })

  it('Should fetch data', async () => {
    const data = await service.listingsQuery({ size: 1, page: 1 })

    expect(data).toBeDefined()
  })
})
