import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Observation from './Observation';
import testHelper from '../testHelper';

//test rendering all observation props

describe('<Observation />', () => {
  let component;
  const observations = testHelper.generateObservations();
  const observation1 = observations[0];  

  beforeEach(()=> {
    component = render(
      <Observation
        observation={observation1}
      />
    )
  })

  //Timestamp
  test('Renders timestamp', ()=> {
    expect(component.container).toHaveTextContent(formatTime(observation1.timestamp));
  })

  //Species
  test('Renders species', ()=> {
    expect(component.container).toHaveTextContent('Tit');
  })

  //Rarity
  test('Renders rarity',()=> {
    expect(component.container).toHaveTextContent('rare');
  })

  //Notes
  test('Renders excerpt correctly', async ()=> {  
    expect(component.container).toHaveTextContent('Lorem ipsum', {exact: false});
    expect(component.container).not.toHaveTextContent('sed', {exact: false})
  })

  //Date
  test('Renders date', ()=> {
    expect(component.container).toHaveTextContent(formatTime(observation1.date));
  })
})

const formatTime = (date) => {
  return date.getFullYear() + '-' + date.getMonth() + '-' + date.getDay() + ', ' +
      date.getHours() + ':' + date.getMinutes();
}