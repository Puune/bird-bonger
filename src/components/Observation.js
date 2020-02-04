import React from 'react';
import util from '../util/util'

/*Const: Observation
  
  Component displaying contents of a single observation. Takes in an observation.

  Parameters:

    observation
*/
const Observation = (props) => {

  const observation = props.observation

  /*Function: getExcerpt
    Format given note to excerpt, rule of thumb is:

      -include first 40 characters

      -cut after complete word

      -max length 55

      -concat '...'

    Parameters:

      note

    Returns:

      excerpt
  */
  const getExcerpt = (note) => {
    let excerpt = note.slice(0, 40);
    let finalCut = note.slice(41, 55);
    finalCut = finalCut.split(' ');
    excerpt = finalCut.length > 1 
      ? excerpt.concat((finalCut[1] + '...'))
      : excerpt
    return <p title='excerpt'>{excerpt}</p>
  }


  /*Function: getTitle
  Format a title from given observation

  - mention id

  - mention rarity

  -mention species

  Parameters:

   id = observation id
   rarity = one of 3 designated raritys
   species = given species

  Returns:

    title
  */
  const getTitle = (id, rarity, species) => {
    id = !id.includes('local')
      ? id
      : 'waiting for connection'

    const article = ['a', 'e', 'i', 'o', 'u', 'y', 'å', 'ä', 'ö'].includes(species[0])
      ? 'an'
      : 'a'
    
    const jargon = [
      'spotted',
      'seen',
      'recognized',
      'noticed',
      'spied',
      'sighted',
      'gawked',
      'peeped',
      'detected'
    ];
    const random = Math.floor(Math.random() * 9);

    return <h2 title='title'>{id + ': ' + article + ' ' + rarity + ' ' + species + ' ' + jargon[random]}</h2>
  }

  return( 
    <div>
      {getTitle(observation.id, observation.rarity, observation.species)}
      {getExcerpt(observation.note)}
      {util.formatDate(observation.date)} <br/>
      {util.formatDate(observation.timestamp)}
    </div>
  )
}

export default Observation;