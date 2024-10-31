import nextJest from 'next/jest';
import createConfig from './jest/createConfig';

const createJestConfig = nextJest({
  dir: './',
});

const atomComponentJestConfig = {
  ...createConfig('atoms'),
};

export default createJestConfig(atomComponentJestConfig);
