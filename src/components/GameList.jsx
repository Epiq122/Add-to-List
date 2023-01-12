import GameShow from "./GameShow.jsx";

function GameList({ games, onDelete, onEdit }) {
  const renderedGames = games.map((game) => {
    return (
      <GameShow onDelete={onDelete} key={game.id} game={game} onEdit={onEdit} />
    );
  });

  return <div className="book-list">{renderedGames}</div>;
}

export default GameList;
