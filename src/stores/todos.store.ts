import { create } from "zustand";

interface Todo {
  id: number;
  text: string;
  done: boolean;
}

interface TodoStore {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  completeTodo: (id: number) => void;
}

export const useTodosStore = create<TodoStore>((set) => ({
  todos: [],
  addTodo: (todo: Todo) =>
    set((state: any) => ({ todos: [...state.todos, todo] })),
  completeTodo: (id: number) =>
    set((state: any) => ({
      todos: state.todos.filter((task: any) => task.id !== id),
    })),
}));
