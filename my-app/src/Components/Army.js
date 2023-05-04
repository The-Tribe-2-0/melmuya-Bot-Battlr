import React, { useState, useEffect } from 'react';

function Army() {
  const [botArmy, setBotArmy] = useState([]);
  useEffect(() => {
    // Fetch data from the server
    fetch(`http://localhost:3000/bots?enlisted=true`)
      .then(response => response.json())
      .then(data => setBotArmy(data));
  }, []);
  const releaseBot = (botId) => {
    const updatedArmy = botArmy.filter(bot => bot.id !== botId);
    setBotArmy(updatedArmy);
    fetch(`http://localhost:3000/bots/${botId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        enlisted: false
      })
    });
  };
  const renderBotArmy = () => {
    if (botArmy.length > 0) {
      return botArmy.map(bot => (
        <div key={bot.id}>
          <h3>Name{bot.name}</h3>
          <button onClick={() => releaseBot(bot.id)}>Release</button>
        </div>
      ));
    } else {
      return <p>Your bot army is empty.</p>;
    }
  };
  return (
    <div>
      {renderBotArmy()}
    </div>
  );
}
export default Army;