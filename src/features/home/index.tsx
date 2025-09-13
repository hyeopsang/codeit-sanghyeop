"use client";
import AddTodo from "./add-todo";
import DoneList from "./done-list";
import TodoList from "./todo-list";
import { useState, useEffect } from "react";
import type { Todo } from "@/types/Todo";
import { fetchWrapper } from "@/api/fetchWrapper";

export default function Home() {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [doneList, setDoneList] = useState<Todo[]>([]);

  useEffect(() => {
    async function fetchTodos() {
      try {
        const data = await fetchWrapper.get("items");
        const todo = data.filter((item: Todo) => item.isCompleted === false);
        const done = data.filter((item: Todo) => item.isCompleted === true);
        setDoneList(done);
        setTodoList(todo);
        console.log(data);
      } catch (error) {
        console.error("Todo 불러오기 실패:", error);
      }
    }

    fetchTodos();
  }, []);

  return (
    <div className="pt-19 md:pt-21 max-w-300 w-full mx-auto xl:px-0 md:px-6 px-4 h-dvh flex flex-col gap-6 md:gap-10">
      <AddTodo />
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-6 gap-y-10">
        <TodoList todoList={todoList} />
        <DoneList doneList={doneList} />
      </div>
    </div>
  );
}
