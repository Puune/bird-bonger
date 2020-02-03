import React from 'react';
import useField from '../hooks/field';

/*Const: ObservationForm
Form component for submitting new observations. Has input fields that utilise useField custom hook:

  -f_species = useField('species')

  -f_rarity = useField('rarity')

  -f_note = useField('note')

  -f_date = useField('date')

Component generates also a timestamp when form is submitted

Parameters:

  useFeed = custom feed state hook

*/
const ObservationForm = (props) => {

  const feed = props.useFeed;

  const f_species = useField('species'); 
  const f_rarity = useField('rarity');
  const f_note = useField('note');
  const f_date = useField('date');
  
  const submit = (event) => {
    event.preventDefault();
    let timestamp = new Date();
    let date = new Date(f_date.field);
    feed.put({
      id: null,
      timestamp,
      "species": f_species.field,
      "rarity": f_rarity.field,
      "note": f_note.field,
      "date": date
    })
  }

  return(
    <div>
      <form name="observationForm" onSubmit={(event)=>submit(event)}>
        <label>
          Species: 
          <input name={f_species.type} type="text" placeholder={f_species.type}
            onChange={f_species.event} value={f_species.field} required/><br/>
        </label>
        <label>
          Rarity:<input name={f_rarity.type} type="text" placeholder={f_rarity.type} 
            onChange={f_rarity.event} value={f_rarity.field} required/><br/>
        </label>
        <label>
          Notes:<input name={f_note.type} type="text" placeholder={f_note.type} 
            onChange={f_note.event} value={f_note.field} required/><br/>
        </label>
        <label>
          Date:<input name={f_date.type} type="date" 
            onChange={f_date.event} value={f_date.field} required/><br/>
        </label>
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default ObservationForm;