import { useState } from 'react';
import useGamesContext from '../hooks/use-books-context.js';
import GameEdit from './GameEdit.jsx';

function GameShow({ game }) {
  const [showEdit, setShowEdit] = useState(false);

  const { deleteGameById } = useGamesContext();

  // event handlers
  const handleDelete = () => {
    deleteGameById(game.id);
  };
  const handleEdit = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = () => {
    setShowEdit(false);
  };

  let content = <h3>{game.title}</h3>;
  if (showEdit) {
    content = <GameEdit game={game} onSubmit={handleSubmit} />;
  }

  return (
    <div className='book-show'>
      <img src={`https://picsum.photos/seed/${game.id}/300/200`} alt='pics' />
      <div>{content}</div>
      <div className='actions'>
        <button className='edit' onClick={handleEdit}>
          Edit
        </button>
        <button className='delete' onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default GameShow;
