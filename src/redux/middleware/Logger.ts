const Logger = (state) => (next) => (action) => {
  console.log("CurrentState => ", state.getState());
  console.log("Action => ", action);
  next(action);
  console.log("CurrentState => ", state.getState());
};

export default Logger;
