/* eslint-disable no-debugger */
/* eslint-disable indent */
const initialState = {
  count: 0,
  age: 65,
  loading: false,
  users: []
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
      break;
    case 'COUNT_TO_1000':
      newState.count = 1000
      break;
    case 'REQUEST_DATA':
      return {
        ...newState,
        loading: true
      }
    case 'RECEIVED_DATA':
      newState.users = action.value;
      newState.loading = false
  }
  return newState;
}
export default Reducer;