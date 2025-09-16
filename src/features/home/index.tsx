// 메인 홈 공통 파일
import AddTodo from './add-todo';
import DoneList from './done-list';
import TodoList from './todo-list';
import type {Todo} from '@/types/Todo';
import {getTodos} from '@/lib/actions';

export default async function Home() {
  const data: Todo[] = await getTodos();
  // 완료 된 할 일과 완료 되지 않은 할 일 구분
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
