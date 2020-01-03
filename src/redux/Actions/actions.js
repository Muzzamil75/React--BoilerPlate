/* eslint-disable no-debugger */
export const countUp = val => {
  return {
    type: "COUNT_UP",
    value: val
  };
};
export const countDown = val => {
  return {
    type: "COUNT_DOWN",
    value: val
  };
};
export const conditonalCallback = val => {
  return {
    type: "CALLBACK",
    value: val
  };
};

export const handleParent = () => {
  return {
    type: "COUNT_TO_1000",
  };
};

export const requestData = () => ({
  type: 'REQUEST_DATA',
});

export const receivedData = (json, two) => {
  return {
    type: 'RECEIVED_DATA',
    value: [...json, ...two]
  }
};

export const fetchData = () => {
  return dispatch => {
    dispatch(requestData())
    setTimeout(() => {
      return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => {
          fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(two => dispatch(receivedData(json, two)))
        })
    }, 1000);
  }
};



