module.exports = {
  roots: ['<rootDir>/src/'],
  coverageDirectory: 'coverage',
  coverageProvider: 'babel',
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/main/**'
  ],
  preset: '@shelf/jest-mongodb',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
