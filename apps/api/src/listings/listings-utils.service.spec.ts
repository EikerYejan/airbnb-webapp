import { createTestingModule } from '../../__tests__/testingModule'
import { SortOrder } from './dtos/getListings.dto'
import { ListingsUtilsService } from './listings-utils.service'

describe('ListingsUtilsService', () => {
  let service: ListingsUtilsService

  beforeEach(async () => {
    const module = await createTestingModule().compile()

    service = module.get<ListingsUtilsService>(ListingsUtilsService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })

  describe('generateQuerySelect', () => {
    it('Should generate and undefined value', () => {
      expect(service.generateQuerySelect()).toBeUndefined()
    })

    it('Should generate a proper select object', () => {
      expect(service.generateQuerySelect(['name', 'id'])).toEqual({ name: true, id: true })
    })
  })

  describe('generateOrderBy', () => {
    it('Should generate and undefined value', () => {
      expect(service.generateOrderBy()).toBeUndefined()
    })

    it('Should generate a proper select object', () => {
      expect(service.generateOrderBy('name', 'desc')).toEqual({ name: 'desc' })
    })
  })

  it('should generatePagination of 75', () => {
    expect(service.generatePagination(25, 4)).toEqual(75)
  })

  it('Should generate query filters', () => {
    const filters = { beds: 2, name: undefined }

    expect(service.generateQueryFilters(filters)).toEqual({
      beds: 2,
    })
  })

  it('Should generate filters', () => {
    const expected = {
      take: 15,
      skip: 0,
      where: {
        name: {
          contains: 'NAME',
        },
        address: {
          contains: 'ADDRESS',
        },
        country: {
          contains: 'USA',
        },
      },
      select: {
        name: true,
      },
      orderBy: {
        beds: 'desc',
      },
    }

    expect(
      service.generateFilters({
        size: 15,
        page: 1,
        name: 'NAME',
        address: 'ADDRESS',
        country: 'USA',
        select: ['name'],
        orderBy: 'beds',
        order: SortOrder.DESC,
      }),
    ).toEqual(expected)
  })

  it('Should create update payload', () => {
    const data = { name: 'NAME', country: 'USA', address: 'ADDRESS' }
    const expected = { ...data, addressJson: { street: 'ADDRESS', country: 'USA' } }

    expect(service.generateCreateOrUpdatePayload(data)).toMatchObject(expected)
  })
})
