import React from 'react';

jest.mock('recharts', () => {
  const OriginalRechartsModule = jest.requireActual('recharts');

  return {
    ...OriginalRechartsModule,
    // eslint-disable-next-line react/prop-types
    ResponsiveContainer: ({ children }) => (
      <OriginalRechartsModule.ResponsiveContainer width={800} aspect={1}>
        {children}
      </OriginalRechartsModule.ResponsiveContainer>
    ),
  };
});


Object.defineProperty(window, 'matchMedia', {
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

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));
