import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCount } from "./CounterApi";
const initialState = {
  value: 0,
  status: "idle",
};

export const incrementAsync = createAsyncThunk(
  "counter/fetchCount",
  async (amount) => {
    const respons = await fetchCount(amount);
    return respons.data;
  }
);

export const CounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        (state.statuis = "idle"), (state.value += action.payload);
      });
  },
});

export const { increment } = CounterSlice.actions;
export const selectCount = (state) => state.counter.value;
export default CounterSlice.reducer;
