import useGamesContext from '../hooks/use-books-context.js';
import GameShow from './GameShow.jsx';

function GameList() {
  const { games } = useGamesContext();

  const renderedGames = games.map((game) => {
    return <GameShow key={game.id} game={game} />;
  });

  return <div className='book-list'>{renderedGames}</div>;
}

export default GameList;
