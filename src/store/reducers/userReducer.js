const inititalState = {
  users: [],
  isDarkMode: true,
  x: "true",
  y: "",
};

const userReducer = (state = inititalState, action) => {
  switch (action.type) {
    case "X":
      return state;
    case "Y":
      return state;
    case "Z":
      return state;

    default:
      return state;
  }
};

export default userReducer;
