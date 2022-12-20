import { createAsyncThunk } from '@reduxjs/toolkit';

const GET = 'SPACE-TRAVELERS-REACT/missons/GET';

const initialState = [];

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET}/fulfilled`:
      return Object.keys(action.payload).map((key) => ({
        missionId: action.payload[key].mission_id,
        missionName: action.payload[key].mission_name,
        description: action.payload[key].description,
      }));
    default:
      return state;
  }
};

const URL = 'https://api.spacexdata.com/v3/missions';

export const fetchMissions = createAsyncThunk(GET, async () => {
  const response = await fetch(URL);
  const data = await response.json();
  return data;
});

export default missionsReducer;
