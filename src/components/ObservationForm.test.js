import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, queryByLabelText, fireEvent } from '@testing-library/react';
import ObservationForm from './ObservationForm';

describe('<ObservationForm />',()=> {
  let component;

  beforeEach(()=>{
    component = render(
      <ObservationForm useField={mockUseField}/>
    )
  })

  test('something renders', () => {
    const input = queryByLabelText (component.container, 'Species:');
    expect(input).toBeInTheDocument();
  })

  test('textfields store text', ()=> {
    const input = queryByLabelText (component.container, 'Notes:');
    fireEvent.change(input, { target: { onChange: 'asdf' } });
    expect(component.container).toBeInTheDocument('asdf');
  })
})

const mockUseField = jest.fn(a => a);