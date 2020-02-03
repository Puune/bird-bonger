import React, { useEffect } from 'react';
import Feed from './components/Feed';
import testHelper from './testHelper';
import useFeed from './hooks/feed';
import ObservationForm from './components/ObservationForm';

function App() {

  const observations = testHelper.generateObservations();
  const feed = useFeed();

  useEffect(()=> {
    feed.set(observations);
  },[])

  return (
    <div className="App">
      <ObservationForm useFeed={feed}/>
      <Feed useFeed={feed} />
    </div>
  );
}

export default App;
