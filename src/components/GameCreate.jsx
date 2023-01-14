import { useState } from 'react';

import useGamesContext from '../hooks/use-books-context.js';

function GameCreate() {
  //state
  const [title, setTitle] = useState('');

  // context
  const { handleCreateGame } = useGamesContext();

  // event handlers
  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    handleCreateGame(title);
    setTitle('');
  };

  return (
    <div className='book-create'>
      <h3>Add a Game</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input className='input' value={title} onChange={handleChange} />
        <button className='button'>Create</button>
      </form>
    </div>
  );
}

export default GameCreate;
