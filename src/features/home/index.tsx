// app/page.tsx
import AddTodo from './add-todo';
import DoneList from './done-list';
import TodoList from './todo-list';
import type {Todo} from '@/types/Todo';
import {getTodos} from '@/app/actions'; // 서버 액션

export default async function Home() {
  const data: Todo[] = await getTodos();

  const todoList = data.filter((item) => !item.isCompleted);
  const doneList = data.filter((item) => item.isCompleted);

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
