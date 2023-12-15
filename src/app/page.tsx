"use client";

import { useState } from "react";
import { useTodosStore } from "../stores/todos.store";
import Link from "next/link";

export default function Todos() {
  const addTodo = useTodosStore((state) => state.addTodo);
  const todos = useTodosStore((state) => state.todos);
  const [input, setInput] = useState("");

  const handleAddTodo = () => {
    addTodo({
      id: todos.length + 1,
      text: input,
      done: false,
    });
    alert("Todo added!");
    setInput("");
  };

  return (
    <div className="w-full h-screen bg-purple-500 flex justify-center flex-col items-center">
      <div>
        <div className="w-full">
          <input
            className="rounded-md py-2 px-4 text-gray-800"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="py-2 px-4 mx-4 bg-purple-600 rounded-md"
            onClick={handleAddTodo}
          >
            Add To-Do
          </button>
        </div>
        <Link
          href="/my-todos"
          className="block mt-12 bg-purple-700 w-full p-6 rounded-md text-center"
        >
          See all my todos
        </Link>
      </div>
    </div>
  );
}
