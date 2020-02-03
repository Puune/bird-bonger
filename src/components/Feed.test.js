import React, { useEffect } from 'react';
import '@testing-library/jest-dom/extend-expect';
import testHelper from '../testHelper';
import { 
  render, queryByTitle, 
} from '@testing-library/react';
import Feed from './Feed';
import useFeed from '../hooks/feed';
import { renderHook } from '@testing-library/react-hooks';
import TestRenderer from 'react-test-renderer';
const { act } = TestRenderer;

describe('<Feed />', ()=> {
  let component;
  let { result } = renderHook(() => useFeed());
  
  beforeEach(()=> {
    act(()=> {
      result.current.set(testHelper.generateObservations());
    })
    component = render(
      <Feed useFeed={result.current} />
    )
  })

  //test that something renders
  test('renders anything', ()=> {
    const feed = queryByTitle(component.container, 'feed');
    expect(feed).toBeInTheDocument();
  })

  //test that all observations render
  test('renders all members given to it', () => {
    expect(component.container).toHaveTextContent('Tit');
    expect(component.container).toHaveTextContent('Kingfisher');
    expect(component.container).toHaveTextContent('Labrador retriever');
  })
})