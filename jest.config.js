module.exports = {
  "roots": [
    `<rootDir>/src`
  ],
  "collectCoverageFrom": [
    `src/**/*.{js,jsx,ts,tsx}`,
    `!src/**/*.d.ts`
  ],
  "setupFiles": [
    "react-app-polyfill/jsdom"
  ],
  "setupFilesAfterEnv": [
    `<rootDir>/src/${process.env.APP_PATH}/setupTest.js`
  ],
  "testMatch": [
    `<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}`,
    `<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}`
  ],
  "testEnvironment": "jsdom",
  "testRunner": "F:\\代码\\react-web-ts\\node_modules\\jest-circus\\runner.js",
  "transform": {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
    "^.+\\.css$": "<rootDir>/config/jest/cssTransform.js",
    "^(?!.*\\.(js|jsx|ts|tsx|css|json)$)": "<rootDir>/config/jest/fileTransform.js"
  },
  "transformIgnorePatterns": [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$",
    "^.+\\.module\\.(css|sass|scss)$"
  ],
  "modulePaths": [],
  "moduleNameMapper": {
    "^react-native$": "react-native-web",
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
    "^@/(.*)$": "<rootDir>/src/$1"
  },
  "moduleFileExtensions": [
    "web.js",
    "js",
    "web.ts",
    "ts",
    "web.tsx",
    "tsx",
    "json",
    "web.jsx",
    "jsx",
    "node"
  ],
  "watchPlugins": [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname"
  ],
  "resetMocks": true
};
