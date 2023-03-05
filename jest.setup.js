import "@testing-library/jest-dom/extend-expect";

global.console = {
    ...console,
    debug: jest.fn(),
    error: jest.fn(),
};
  