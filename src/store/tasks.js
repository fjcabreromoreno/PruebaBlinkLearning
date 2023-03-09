import { createSlice } from '@reduxjs/toolkit';

import { status } from '../data/mock';

const initialState = status;

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    updateTaskStatus: (state, action) => {
      Object.keys(state).forEach((item) => {
        if (item === action.payload.targetColumn) {
          state = {
            ...state,
            [item]: {
              ...state[item],
              items: [...state[item].items, action.payload.content],
            },
          };
        } else {
          state = {
            ...state,
            [item]: {
              ...state[item],
              items: [
                ...state[item].items.filter(
                  (item) => item.id !== action.payload.id
                ),
              ],
            },
          };
        }
      });

      return state;
    },
  },
});

export const { getTasks, updateTaskStatus } = taskSlice.actions;

export default taskSlice.reducer;
