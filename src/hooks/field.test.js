import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { renderHook } from '@testing-library/react-hooks'
import useField from './field';
import TestRenderer from 'react-test-renderer';
const {act} = TestRenderer;

describe('field statehook', () => {
  const { result } = renderHook(() => useField('test'));

  beforeEach(()=> {
    act(() => {
      result.current.reset();
    })
  })

  test('a String is stored and resetted', ()=> {
    act(()=> {
      result.current.set('Spaghetti');
    })
    expect(result.current.field).toBe('Spaghetti');

    act(()=> {
      result.current.reset();
    })
    expect(result.current.field).toBe('');
  })

  test('type of the field is "test"', ()=> {
    expect(result.current.type).toBe('test');
  })
})