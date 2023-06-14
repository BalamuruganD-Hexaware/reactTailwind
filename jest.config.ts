import type { Config } from 'jest';

const config: Config = {
  verbose: true,
  collectCoverage: true,
  transform: {
    "^.+\\.tsx$": "ts-jest",
    "^.+\\.ts$": "ts-jest",
    "^.+\\.svg$": "<rootDir>/svgTransform.cjs"
  },
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "^@/(.*)$": "<rootDir>/src/$1"
  },
  moduleDirectories: [
    "node_modules",
    "src"
  ],
  coveragePathIgnorePatterns: [
    "<rootDir>/src/assets/",
    "./assets/"
  ],
  testEnvironment: "jsdom"
};

export default config;