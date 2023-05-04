import React from 'react';
import Bots from './Components/Bots';
import Army from './Components/Army';


function App() {
  return (
    <div>
      <h1>Bot Battlr</h1>
      <h2>Your Bot Army</h2>
      <Army />
      <h2>Bot Collection</h2>
      <Bots />
    </div>
  );
}
export default App;