import { useContext } from 'react';
import GamesContext from '../context/games.jsx';

import GameShow from './GameShow.jsx';

function GameList() {
  const { games } = useContext(GamesContext);

  const renderedGames = games.map((game) => {
    return <GameShow key={game.id} game={game} />;
  });

  return <div className='book-list'>{renderedGames}</div>;
}

export default GameList;
