const config = {
  setupFiles: ['<rootDir>/__mocks__/envTest.js', 'whatwg-fetch'],
  setupFilesAfterEnv: ['<rootDir>/__mocks__/jest-setup.js'],
  moduleDirectories: ['<rootDir>/src', 'node_modules'],
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/__mocks__/fileMock.js',
    '^.+\\.(css|scss|sass)$': 'identity-obj-proxy',
    '^@/(.*)$': '<rootDir>/$1',
    '^components/(.*)$': '<rootDir>/src/components/$1',
    '^assets/(.*)$': '<rootDir>/src/assets/$1',
    '^src/(.*)$': '<rootDir>/src/$1',
  },
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  testEnvironment: 'jsdom',
  reporters: ['default', 'jest-junit'],
  coverageReporters: ['cobertura'],
};

module.exports = config;
