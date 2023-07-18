import { Link } from "react-router-dom";
import useTodoListStore from "../../store";
import "./TodoActionsButton.css";

interface Props {
  todoId: number;
}

const TodoActionsButton = ({ todoId }: Props) => {
  const { deleteTodo, markTodoAsDone } = useTodoListStore();
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
          <Link to={`/todos/${todoId}/edit`} className="dropdown-item">
            Edit
          </Link>
        </li>
        <li>
          <button className="dropdown-item" onClick={() => deleteTodo(todoId)}>
            Delete
          </button>
        </li>
        <li>
          <button
            className="dropdown-item"
            onClick={() => markTodoAsDone(todoId)}
          >
            Mark Todo as Done
          </button>
        </li>
      </ul>
    </div>
  );
};

export default TodoActionsButton;
