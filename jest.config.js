module.exports = {
  roots: ['<rootDir>/src/'],
  coverageDirectory: 'coverage',
  coverageProvider: 'babel',
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  testEnvironment: 'node',
  preset: '@shelf/jest-mongodb',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
