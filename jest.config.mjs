import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const config = {
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],

  testEnvironment: "jest-environment-jsdom",
  // Allow Jest to transform specific ESM dependencies that ship untranspiled code
  transformIgnorePatterns: [
    "<rootDir>/node_modules/(?!(refractor|react-syntax-highlighter|hastscript)/)",
  ],
  // Mock react-syntax-highlighter so it does not pull in the ESM-only refractor package
  moduleNameMapper: {
    "^react-syntax-highlighter(.*)$": "<rootDir>/__mocks__/react-syntax-highlighter.js",
  },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);
