import { ExecutionContext } from '@nestjs/common'
import { createTestingModule, testApiKey } from '../../__tests__/testingModule'
import { AuthGuard } from './auth.guard'

const apiKey = testApiKey
const mockHttpRequest = {
  headers: {},
}
const mockAuthorizedHttpRequest = {
  headers: {
    'x-api-key': apiKey,
  },
}

const mockContext = (isAuth = false) => {
  return {
    getType: () => 'http',
    switchToHttp: () => ({
      getRequest: () => (isAuth ? mockAuthorizedHttpRequest : mockHttpRequest),
    }),
  } as ExecutionContext
}

describe('AuthGuard', () => {
  let guard: AuthGuard

  beforeEach(async () => {
    const app = await createTestingModule().compile()

    guard = app.get<AuthGuard>(AuthGuard)
    guard?.onModuleInit()
  })

  afterAll(() => {
    jest.clearAllMocks()
  })

  it('Should be defined', () => {
    expect(guard).toBeDefined()
  })

  it('Should fail validation', () => {
    expect(guard.canActivate(mockContext(false))).toBeFalsy()
  })

  it('Should pass validation', () => {
    expect(guard.canActivate(mockContext(true))).toBeTruthy()
  })
})
