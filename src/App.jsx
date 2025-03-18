import { useEffect } from "react";
import AddForm from "./components/AddForm";
import ListTodos from "./components/ListTodos";
import { useDispatch } from "react-redux";
import { setTodos } from "./store/actions/todoActions";
import api from "./utils/api";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    api
      .get("/todos")
      .then((res) => dispatch(setTodos(res.data)))
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <div className="vh-100 bg-dark text-white vw-100">
      <div className="container p-5">
        <h2 className="text-center">
          REDUX <span className="text-warning">CRUD</span>
        </h2>
        <AddForm />
        <ListTodos />
      </div>
    </div>
  );
};

export default App;
