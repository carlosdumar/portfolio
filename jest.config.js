module.exports = {
  preset: "ts-jest",
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
  },
  testEnvironment: "jsdom",
  collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}", "!src/components/ui/**"],
  moduleNameMapper: {
    '^next/font/google$': '<rootDir>/__mocks__/mockNextGoogleFont.js',
  },
};
