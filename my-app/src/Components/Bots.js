import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Bots = ({ enlistBot }) => {
  const [bots, setBots] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('http://localhost:3000/bots');
      setBots(result.data);
    };
    fetchData();
  }, []);
  return (
    <div className="bot">
      {bots.map((bot) => (
        <div key={bot.id} className="bot-card">
          <div className="bot-card__image-container">
            <img src={bot.avatar_url} alt={bot.name} />
          </div>
          <div className="bot-card__details">
            <h2>name{bot.name}</h2>
            <p>type{bot.weapon}</p>
            <p>{bot.special_ability}</p>
            <button
              onClick={() => enlistBot(bot)}
              enabled={bot.enlisted}
            >
              {bot.enlisted ? 'Enlisted' : 'Enlist'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Bots;