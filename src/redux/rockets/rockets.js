import { createAsyncThunk } from '@reduxjs/toolkit';

const GET = 'space-travelers-react/rocketsReducer/GET_ROCKET';

// Reducer
const rocketsReducer = (state = [], action) => {
  switch (action.type) {
    case `${GET}/fulfilled`:
      return action.payload;
    default:
      return state;
  }
};

// Action creator
export const getRockets = (payload) => ({
  type: GET,
  payload,
});

// API
export const fetchRockets = createAsyncThunk(GET, async () => {
  const response = await fetch('https://api.spacexdata.com/v3/rockets');
  const data = await response.json();
  return data;
});

export default rocketsReducer;
