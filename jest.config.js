export default {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.js$': ['babel-jest', { 
      presets: [['@babel/preset-env', { 
        targets: { node: 'current' },
        modules: 'commonjs'
      }]] 
    }]
  },
  transformIgnorePatterns: [
    'node_modules/(?!(three)/)'
  ],
  moduleNameMapper: {
    '^three$': '<rootDir>/node_modules/three/build/three.module.js',
    '^three/(.*)$': '<rootDir>/node_modules/three/$1'
  },
  setupFilesAfterEnv: ['<rootDir>/test/setup.js'],
  testMatch: ['**/test/**/*.test.js'],
  collectCoverageFrom: [
    'src/**/*.js',
    '!src/**/*.test.js'
  ],
  coverageReporters: ['text', 'lcov', 'html']
}; 