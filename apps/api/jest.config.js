module.exports = {
  displayName: 'airbnb-clone-api',
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
  modulePathIgnorePatterns: ['<rootDir>/__tests__'],
  coverageDirectory: '../../coverage/apps/airbnb-clone-api',
  setupFilesAfterEnv: ['<rootDir>setupTests.ts'],
  coverageThreshold: {
    // TODO: increase coverage threshold gradually
    global: {
      functions: 60,
      lines: 80,
      statements: 80,
    },
  },
}
