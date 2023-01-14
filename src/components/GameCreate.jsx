import { useState, useContext } from 'react';
import GamesContext from '../context/games.jsx';

function GameCreate() {
  //state
  const [title, setTitle] = useState('');

  // context
  const { handleCreateGame } = useContext(GamesContext);

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
