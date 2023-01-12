import { useState } from "react";
import GameEdit from "./GameEdit.jsx";

function GameShow({ game, onDelete, onEdit }) {
  const [showEdit, setShowEdit] = useState(false);

  // event handlers
  const handleDelete = () => {
    onDelete(game.id);
  };
  const handleEdit = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (id, newTitle) => {
    onEdit(id, newTitle);
    setShowEdit(false);
  };

  let content = <h3>{game.title}</h3>;
  if (showEdit) {
    content = <GameEdit game={game} onSubmit={handleSubmit} />;
  }

  return (
    <div className="book-show">
      <img src={`https://picsum.photos/seed/${game.id}/300/200`} alt="pics" />
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={handleEdit}>
          Edit
        </button>
        <button className="delete" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default GameShow;
