import * as matchers from '@testing-library/jest-dom/matchers';
import { cleanup } from '@testing-library/react';
import { expect } from 'vitest';
import { server } from './mocks/worker';

expect.extend(matchers);


afterEach(() => {
    cleanup();
  });
  
  // Start worker before all tests
  beforeAll(() => { server.listen() })
  
  //  Close worker after all tests
  afterAll(() => {server.close()})
  
  // Reset handlers after each test `important for test isolation`
  afterEach(() => {server.resetHandlers()})