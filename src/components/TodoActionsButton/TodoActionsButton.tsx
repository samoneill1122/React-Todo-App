import { Link } from "react-router-dom";
import { Todo } from "../../store";
import "./TodoActionsButton.css";

interface Props {
  todo: Todo;
  onDeleteTodo: (id: number) => void;
  onMarkTodo: (id: number) => void;
}

const TodoActionsButton = ({ todo, onDeleteTodo, onMarkTodo }: Props) => {
  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Options
      </button>
      <ul className="dropdown-menu">
        <li>
          <Link to={`/todos/${todo.id}/edit`} className="dropdown-item">
            Edit
          </Link>
        </li>
        <li>
          <button
            className="dropdown-item"
            onClick={() => onDeleteTodo(todo.id)}
          >
            Delete
          </button>
        </li>
        <li>
          <button className="dropdown-item" onClick={() => onMarkTodo(todo.id)}>
            Mark Todo as Done
          </button>
        </li>
      </ul>
    </div>
  );
};

export default TodoActionsButton;
