import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TInitialState = {
  todos: TTodo[];
};

type TTodo = {
  id: string;
  title: string;
  description: string;
  isCompleted?: boolean;
};

const initialState: TInitialState = {
  todos: [],
};

export const counterSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TTodo>) => {
      state.todos.push({ ...action.payload, isCompleted: false });
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
    toggoleComplete: (state, action: PayloadAction<string>) => {
      const task = state.todos.find((item) => item.id === action.payload);
      task!.isCompleted = !task?.isCompleted;
      state.todos.sort(
        (a, b) => (a.isCompleted ? 1 : 0) - (b.isCompleted ? 1 : 0)
      );
    },
  },
});

export const { addTodo, removeTodo, toggoleComplete } = counterSlice.actions;

export default counterSlice.reducer;
