import { createAsyncThunk } from '@reduxjs/toolkit';

const GET = 'space-travelers-react/rocketsReducer/GET';
const BOOK = 'space-travelers-react/rocketsReducer/BOOK';

// Book rocket
const reserveRocket = (state, payload) => {
  const newState = state.map((rocket) => {
    if (rocket.id !== payload) return rocket;
    return { ...rocket, reserved: !rocket.reserved };
  });
  return newState;
};

// Reducer
const rocketsReducer = (state = [], action) => {
  switch (action.type) {
    case `${GET}/fulfilled`:
      return action.payload;
    case BOOK:
      return reserveRocket(state, action.payload);
    default:
      return state;
  }
};

// Action creator
export const getRockets = (payload) => ({
  type: GET,
  payload,
});

export const bookRocket = (payload) => ({
  type: BOOK,
  payload,
});

// API
export const fetchRockets = createAsyncThunk(GET, async () => {
  const response = await fetch('https://api.spacexdata.com/v3/rockets');
  const data = await response.json();
  const rockets = data.map((rocket) => {
    const result = rocket.reserved !== undefined;
    return { ...rocket, reserved: result };
  });
  return rockets;
});

export default rocketsReducer;
