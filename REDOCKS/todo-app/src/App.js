import React, { useReducer, useState } from "react";

const initialState = {
  toDos: []
};

const ADD = "add";

const reducer = (state, action) => {
  switch (action.type) {
    case ADD:
      return { toDos: [...state.toDos, { text: action.payload }] };
    default:
      return;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [newToDo, setNewToDo] = useState("");

  const onSubmit = event => {
    event.preventDefault();
    dispatch({ type: ADD, payload: newToDo });
  };

  const onChange = event => {
    const {
      target: { value }
    } = event;

    setNewToDo(value);
  };

  return (
    <>
      <h1>Add to do</h1>

      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Write to do"
          value={newToDo}
          onChange={onChange}
        />
      </form>

      <h2>To Dos</h2>
      <ul>
        {state.toDos.map((toDo, index) => (
          <li key={index}>{toDo.text}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
