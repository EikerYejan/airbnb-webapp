import { ArgumentMetadata, ValidationPipe } from '@nestjs/common'
import { CreateListingDto } from './createListing.dto'

describe('Create listing DTO', () => {
  let target: ValidationPipe
  const metadata: ArgumentMetadata = { type: 'body', metatype: CreateListingDto }

  beforeEach(() => {
    target = new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    })
  })

  it('Should fail validation', async () => {
    try {
      await target.transform({}, metadata)
    } catch (error) {
      expect(error).toBeDefined()
    }
  })

  it('Should fail addressJson and images validation', async () => {
    try {
      await target.transform({ addressJson: {}, images: {}, lastScraped: '2022-01-20' }, metadata)
    } catch (error) {
      expect(error).toBeDefined()
      expect(Array.isArray(error.response.message)).toBeTruthy()
    }
  })
})
