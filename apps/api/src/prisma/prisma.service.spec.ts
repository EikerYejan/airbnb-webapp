import { PrismaService } from './prisma.service'

describe('PrismaService', () => {
  let prisma: PrismaService

  beforeEach(() => {
    prisma = new PrismaService()
  })

  it('Should create service', () => {
    expect(prisma).toBeDefined()
  })
})
