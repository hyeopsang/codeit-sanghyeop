// 할 일 리스트 컴포넌트
'use client';
import Image from 'next/image';
import type {Todo} from '@/types/Todo';
import TodoItem from './todo-item';
import EmptyTodo from './empty-todo';
interface TodoProps {
  todoList?: Todo[];
}

export default function TodoList({todoList = []}: TodoProps) {
  return (
    <section className="flex flex-col gap-4">
      <Image
        src={'/images/todo.svg'}
        alt="todo title"
        title="todo"
        width={101}
        height={36}
      />
      {/* 할 일이 비어 있을 때 */}
      {todoList.length === 0 && <EmptyTodo />}
      {/* 할 일 리스트 */}
      {todoList.length > 0 && (
        <ul className="flex flex-col gap-4 items-center justify-start">
          {todoList.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      )}
    </section>
  );
}
