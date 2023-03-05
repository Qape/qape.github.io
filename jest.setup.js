import '@testing-library/jest-dom/extend-expect';

import { jest } from '@jest/globals';

global.console = {
  ...console,
  debug: jest.fn(),
  error: jest.fn(),
};
