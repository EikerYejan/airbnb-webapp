module.exports = {
  displayName: '@airbnb-webapp/api',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.json',
    },
  },
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  modulePathIgnorePatterns: ['<rootDir>/__tests__', '<rootDir>/dist'],
  coverageDirectory: '../../coverage/apps/airbnb-webapp-api',
  setupFilesAfterEnv: ['<rootDir>setupTests.ts'],
  coverageThreshold: {
    global: {
      functions: 60,
      lines: 80,
      statements: 80,
    },
  },
}
