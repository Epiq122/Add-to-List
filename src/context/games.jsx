import { createContext, useState } from 'react';
import axios from 'axios';

const GamesContext = createContext();

function Provider({ children }) {
  // state
  const [games, setGames] = useState([]);

  const fetchGames = async () => {
    const response = await axios.get('http://localhost:3001/games');
    setGames(response.data);
  };

  const editGameById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/games/${id}`, {
      title: newTitle,
    });

    const updatedGames = games.map((game) => {
      if (game.id === id) {
        // take all the key value pairs from the response.data object
        return { ...game, ...response.data };
      }
      return game;
    });

    setGames(updatedGames);
  };

  const deleteGameById = async (id) => {
    await axios.delete(`http://localhost:3001/games/${id}`);
    const updatedGames = games.filter((game) => game.id !== id);

    setGames(updatedGames);
  };

  // event handlers
  const handleCreateGame = async (title) => {
    // adds a games to the DB
    const response = await axios.post('http://localhost:3001/games', {
      title,
    });

    // get the new game from the response
    const updatedGames = [...games, response.data];
    setGames(updatedGames);
  };

  const valueToShare = {
    games,
    fetchGames,
    handleCreateGame,
    deleteGameById,
    editGameById,
  };

  return (
    <GamesContext.Provider value={valueToShare}>
      {children}
    </GamesContext.Provider>
  );
}

export { Provider };
export default GamesContext;
