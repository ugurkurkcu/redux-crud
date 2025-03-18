import { useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "./Modal";
import { deleteTodo, updateTodo } from "../store/actions/todoActions";
import api from "../utils/api";

const TodoCard = ({ todo }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = () => {
    api
      .delete(`/todos/${todo.id}`)
      .then(() => dispatch(deleteTodo(todo.id)))
      .catch((err) => console.log(err.message));
  };

  const toggleIsDone = () => {
    const updated = { ...todo, is_done: !todo.is_done };

    api
      .put(`/todos/${todo.id}`, updated)
      .then(() => dispatch(updateTodo(updated)))
      .catch(() => err.message);
  };

  return (
    <div className="shadow-lg border p-4 my-5 rounded-4 ">
      <h4>{todo.text}</h4>
      <div className="d-flex align-items-center justify-content-between my-3">
        <p className="p-2">{todo.created_at}</p>
        <h6
          className={`${
            todo.is_done ? "bg-success" : "bg-warning"
          } p-1 text-dark rounded`}
        >
          {todo.is_done ? "Finished" : "In Progress"}
        </h6>
      </div>

      <div className="d-flex justify-content-around gap-2">
        <button
          onClick={() => setIsModalOpen(!isModalOpen)}
          className="flex-fill btn btn-success"
        >
          Edit
        </button>
        <button onClick={toggleIsDone} className="flex-fill  btn btn-warning">
          {todo.is_done ? "Start Again" : "Complete"}
        </button>
        <button onClick={handleDelete} className="flex-fill btn btn-danger">
          Delete
        </button>
      </div>
      {isModalOpen && <Modal close={() => setIsModalOpen(false)} todo={todo} />}
    </div>
  );
};

export default TodoCard;
