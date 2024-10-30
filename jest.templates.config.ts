import nextJest from 'next/jest';
import createConfig from './jest/createConfig';

const createJestConfig = nextJest({
  dir: './',
});

const atomComponentJestConfig = {
  ...createConfig('templates'),
};

export default createJestConfig(atomComponentJestConfig);
