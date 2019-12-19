/* eslint-disable indent */
const initialState = {
  count: 0,
  age: 65
}

const Reducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case 'COUNT_UP':
      newState.count += action.value;
      break;
    case 'COUNT_DOWN':
      newState.count -= action.value;
      break;
    case 'CALLBACK':
      if (newState.count === 3)
        newState.count = 100
  }
  return newState;
}

export default Reducer;