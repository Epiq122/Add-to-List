import { useState, useContext } from 'react';
import GamesContext from '../context/games.jsx';

function GameEdit({ game, onSubmit }) {
  const [title, setTitle] = useState(game.title);

  const { editBookById } = useContext(GamesContext);

  // event handlers
  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit();
    editBookById(game.id, title);
  };

  return (
    <form className='book-edit' onSubmit={handleSubmit}>
      <label>Title</label>
      <input className='input' value={title} onChange={handleChange} />
      <button className='button is-primary'>Update</button>
    </form>
  );
}

export default GameEdit;
