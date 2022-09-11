import React from 'react';
import Header from './Header';
import ActivityFeed from './components/ActivityFeed'
const App = () => {
  return (
    <div className='container'>
      <Header/>
      <ActivityFeed/>
    </div>
  );
};


export default App;
