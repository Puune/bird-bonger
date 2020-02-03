import React, {useState} from 'react';

/*Functions: feed
React hook for observation feed

*/
const useFeed = () => {
  const [observations, setObservations] = useState([]);

  const put = (obs) => {
    setObservations(observations.concat(obs));
  }

  const set = (obs) => {    
    setObservations(obs)
  }

  const sort = () => {
    function sorter(a, b){
      let timeA = new Date(a.timestamp);
      let timeB = new Date(b.timestamp);      
      return timeB.getTime() - timeA.getTime();
    }
    let newOrder = Array.from(observations);  
    newOrder = newOrder.sort(sorter);
    setObservations(newOrder);
    return true;
  }

  return{
    observations,
    set,
    put,
    sort
  }
}

export default useFeed;