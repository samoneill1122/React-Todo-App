import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { Link } from "react-router-dom";
import useTodoListStore from "../../store";
import "./TodoActionsButton.css";

interface Props {
  todoId: number;
  hideMarkTodo: boolean;
}

const TodoActionsButton = ({ todoId, hideMarkTodo }: Props) => {
  const { deleteTodo, markTodoAsDone } = useTodoListStore();

  return (
    <div className="dropdown">
      <button
        id="actionsButton"
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Options
      </button>
      <HiOutlineDotsHorizontal
        id="actionsElipses"
        className="dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        size={20}
      />
      <ul className="dropdown-menu">
        <li>
          <Link
            id="editButton"
            to={`/todos/${todoId}/edit`}
            className="dropdown-item"
          >
            Edit
          </Link>
        </li>
        <li>
          <button
            id="deleteButton"
            className="dropdown-item"
            onClick={() => deleteTodo(todoId)}
          >
            Delete
          </button>
        </li>
        <li>
          {!hideMarkTodo && (
            <button
              id="markTodoButton"
              className="dropdown-item"
              onClick={() => markTodoAsDone(todoId)}
            >
              Mark Todo as Done
            </button>
          )}
        </li>
      </ul>
    </div>
  );
};

export default TodoActionsButton;
