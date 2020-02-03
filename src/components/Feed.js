import React, { useEffect } from 'react';
import useFeed from '../hooks/feed';
import Observation from './Observation';

/*Const: Feed
List component for the observations. Will generate an unordered list from 'feed' custom hook

Parameters:

  useFeed = Custom hook, containing 'feed' state, formatting methods

*/
const Feed = (props) => {
  const feed = props.useFeed;
    

  const listify = (observation) => {
    return(
      <li key={observation.id}>
        <Observation observation={observation}/>
      </li>
    )
  }

  return(
    <ul title="feed">
      {feed.observations.map((obs) => listify(obs))}
    </ul>
  )
}

export default Feed;