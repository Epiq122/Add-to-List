import { useEffect, useContext } from 'react';
import GameCreate from './components/GameCreate.jsx';
import GameList from './components/GameList.jsx';
import GamesContext from './context/games.jsx';

function App() {
  const { fetchGames } = useContext(GamesContext);

  useEffect(() => {
    fetchGames();
  }, []);

  return (
    <div className='app'>
      <h1>Games List</h1>
      <GameList />
      <GameCreate />
    </div>
  );
}

export default App;
