import { useRef } from "react";
import { useDispatch } from "react-redux";
import { updateTodo } from "../store/actions/todoActions";
import api from "../utils/api";

const Modal = ({ close, todo }) => {
  const inputRef = useRef();
  const dispatch = useDispatch();

  const handleChange = () => {
    const newText = inputRef.current.value;

    const updatedTodo = {
      ...todo,
      text: newText,
      created_at: new Date().toLocaleDateString(),
    };

    api
      .put(`/todos/${todo.id}`, updatedTodo)
      .then(() => dispatch(updateTodo(updatedTodo)))
      .catch((err) => console.log(err.message));

    close();
  };
  return (
    <div className="modal bg-black bg-opacity-50  d-block text-dark">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header ">
            <h5 className="modal-title">UPDATE todo</h5>
          </div>
          <div className="modal-body">
            <label>New Title</label>
            <input
              ref={inputRef}
              className="form-control shadow-sm mt-2"
              type="text"
              defaultValue={todo.text}
            />
          </div>
          <div className="modal-footer">
            <button
              onClick={handleChange}
              type="button"
              className="btn btn-warning"
            >
              Save changes
            </button>
            <button
              onClick={close}
              type="button"
              className="btn btn-dark"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
