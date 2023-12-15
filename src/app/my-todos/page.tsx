"use client";
import Link from "next/link";
import { useTodosStore } from "../../stores/todos.store";

interface Todo {
  id: number;
  text: string;
  done: boolean;
}

export default function MyTodos() {
  const todos = useTodosStore((state) => state.todos);
  const completeTodo = useTodosStore((state) => state.completeTodo);
  const handleCompleteTodo = (id: number) => {
    completeTodo(id);
  };
  return (
    <div className="w-full h-screen bg-purple-500 flex justify-center flex-col items-center">
      <div>
        <h1 className="text-4xl font-black">My Tasks</h1>
        <ul className="mt-12 bg-purple-700 w-[400px] p-6 rounded-md">
          {todos.length ? (
            <>
              {todos.map((todo: Todo, index: number) => (
                <li
                  key={index}
                  className="flex justify-between items-center my-4"
                >
                  <p>{todo.text}</p>
                  <button
                    onClick={() => handleCompleteTodo(todo.id)}
                    className="bg-green-200 text-green-800 rounded-md px-4 py-2"
                  >
                    Complete
                  </button>
                </li>
              ))}
            </>
          ) : (
            <div className="flex flex-col gap-8">
              <p>None tasks to do.</p>
              <Link
                href="/"
                className="text-center rounded-md bg-purple-900 w-1/2 px-4 py-2"
              >
                Add a Task
              </Link>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
}
