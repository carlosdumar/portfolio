Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

Object.defineProperty(window, "fetch", {
  value: () => {
    return Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        name: "Goku",
        power: 9000,
      }),
    });
  },
  writable: true,
  configurable: true,
});

Object.defineProperty(window, 'scrollTo', {
    value: jest.fn(),
    writable: true,
    configurable: true,
})

global.structuredClone = (obj) => {
  if (obj === undefined) return undefined;
  return JSON.parse(JSON.stringify(obj));
};

Object.defineProperty(window, 'matchMedia', {
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

import "@testing-library/jest-dom";
