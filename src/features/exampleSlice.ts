import { createSlice } from "@reduxjs/toolkit";

const baseUrl = "https://yourbaseurl";

interface YourData {
  // set your data state here
  name: string;
  number: string;
}

interface ExampleState {
  data: null | YourData;
}

const initialState: ExampleState = {
  data: null,
}; // define your initial state here

// Create a slice
const exampleSlice = createSlice({
  name: "example",
  initialState,
  reducers: {
    setExampleData: (state) => {
      state.data = { name: "test", number: "" };
    },
  }, // define your reducers here
});

// Export the actions here
export const { setExampleData } = exampleSlice.actions;

export default exampleSlice.reducer;
