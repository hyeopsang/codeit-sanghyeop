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
      {todoList.length === 0 && <EmptyTodo />}
      {todoList.length > 0 && (
        <ul className="flex flex-col gap-4 items-center justify-start">
          {todoList.map((todo) => (
            <TodoItem key={todo.id} title="성하 보고싶다" />
          ))}
          <TodoItem title="성하 보고싶다" />
          <TodoItem title="성하 보고싶다" />
          <TodoItem title="성하 보고싶다" />
        </ul>
      )}
    </section>
  );
}
