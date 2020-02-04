import React, { useState } from 'react';

/*Functions: field
React hook for input fields
*/
const useField = (type) => {
  const [field, setField] = useState('');

  const set = (input) =>  {
    setField(input);
  }
  
  const event = (event) => {
    setField(event.target.value);
  }

  const reset = () => {
    setField('');
  }

  return{
    field,
    set,
    reset,
    type,
    event
  }
}

export default useField;