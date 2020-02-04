import React, { useEffect } from 'react';
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
  const f_time = useField('timne');
  
  const submit = (event) => {
    event.preventDefault();
    let timestamp = new Date().toJSON();
    let date = new Date(f_date.field + ', ' + f_time.field).toJSON();

    //create observation object
    const observation = {
      id: "local" + (Math.random() * 10000),
      timestamp,
      "species": f_species.field,
      "rarity": f_rarity.field,
      "note": f_note.field,
      "date": date
    }
    //put it in state
    feed.put(observation)

    //store to localstorage
    let oldLocal = JSON.parse(window.localStorage.getItem('localObs'));
    oldLocal = oldLocal!==null 
      ? oldLocal.concat(observation)
      : [observation]
    window.localStorage.setItem('localObs',JSON.stringify(oldLocal));
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
        <label>
          Time:<input name={f_time.type} type="time"
            onChange={f_time.event} value={f_time.field} required /><br/>
        </label>
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default ObservationForm;