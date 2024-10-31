const coverageThreshold = {
  global: {
    branches: 80,
    functions: 80,
    lines: 80,
    statements: 80,
  },
};

// NOTE:コンポーネント構成が変更した場合は変更要
type Directory = 'atoms' | 'molecules' | 'organisms' | 'templates' | 'pages';

const createJestConfig = (directory: Directory) => {
  return {
    moduleDirectories: ['node_modules', '<rootDir>/'],
    testEnvironment: 'jest-environment-jsdom',
    collectCoverage: true,
    coverageDirectory: `coverage/${directory}`,
    collectCoverageFrom: [
      `src/components/${directory}/**/*.ts`,
      `src/components/${directory}/**/*.tsx`,
      `!src/components/${directory}/**/*.stories.ts`,
      `!src/components/${directory}/**/*.stories.tsx`,
    ],
    coverageThreshold: coverageThreshold,
    testMatch: [`**/src/components/${directory}/**/*.{test,spec}.{js,jsx,ts,tsx}`],
    preset: 'ts-jest',
  };
};

export default createJestConfig;
