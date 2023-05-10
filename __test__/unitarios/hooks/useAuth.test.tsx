import React from 'react';
import { renderHook } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import useAuth from '../../../src/hooks/useAuth';

const mockStore = configureMockStore();

describe('useAuth', () => {
  it('returns auth and loading values', () => {
    const store = mockStore({
      auth: { usuario: { nome: 'Teste' } }
    });

    const { result } = renderHook(() => useAuth(), {
      wrapper: ({ children }) => (
        <Provider store={store}>
          {children}
        </Provider>
      )
    });

    expect(result.current.auth).toBe(true);
  });

  it('returns auth and loading values', () => {
    const store = mockStore({
      auth: { usuario: null }
    });

    const { result } = renderHook(() => useAuth(), {
      wrapper: ({ children }) => (
        <Provider store={store}>
          {children}
        </Provider>
      )
    });

    expect(result.current.auth).toBe(false);
  });
});
