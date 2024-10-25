import '@testing-library/jest-dom';

describe('Button', () => {
  const buttonLabel = 'Click me';
  const handleClick = jest.fn();

  beforeEach(() => {
    handleClick.mockClear();
  });
});
