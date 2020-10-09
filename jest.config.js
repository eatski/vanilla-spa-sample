module.exports = {
  moduleFileExtensions: ["ts", "tsx", "js"],
  moduleNameMapper: {
    "^@/(.+)": "<rootDir>/src/$1",
  },
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  globals: {
    "ts-jest": {
      tsConfigFile: "tsconfig.json",
    },
  },
  testMatch: ["**/*.test.+(ts|tsx|js)"],
};
