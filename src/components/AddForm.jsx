import { useDispatch } from "react-redux";
import { v4 } from "uuid";
import { addTodo } from "../store/actions/todoActions";
import api from "../utils/api";
import { toast } from "react-toastify";

const AddForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: v4(),
      text: e.target[0].value,
      is_done: false,
      created_at: new Date().toLocaleDateString("tr-TR", "dd/mm/yyyy"),
    };

    const resolveAfter3sec = api
      .post("/todos", newTodo)
      .then(() => dispatch(addTodo(newTodo)))
      .catch((err) => {
        throw new Error();
      });
    toast.promise(resolveAfter3sec, {
      pending: "Todo is pending",
      success: "Added successfully 👌",
      error: "Adding rejected 🤯",
    });

    e.target.reset();
  };
  return (
    <form onSubmit={handleSubmit} className="d-flex gap-3 my-5">
      <input className="form-control" type="text" />
      <button className="btn btn-warning">Add</button>
    </form>
  );
};

export default AddForm;
