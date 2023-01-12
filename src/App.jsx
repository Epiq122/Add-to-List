import { useEffect, useState } from "react";
import GameCreate from "./components/GameCreate.jsx";
import GameList from "./components/GameList.jsx";
import axios from "axios";

function App() {
  // state
  const [games, setGames] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/games");
    setGames(response.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

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
    // adds a book to the DB
    const response = await axios.post("http://localhost:3001/games", {
      title,
    });

    // get the new game from the response
    const updatedGames = [...games, response.data];
    setGames(updatedGames);
  };

  return (
    <div className="app">
      <h1>Games List</h1>
      <GameList games={games} onDelete={deleteGameById} onEdit={editGameById} />
      <GameCreate onCreate={handleCreateGame} />
    </div>
  );
}

export default App;
