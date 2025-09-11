import Image from 'next/image';
import Link from 'next/link';
import type {Todo} from '@/types/Todo';
import UnCheckedIcon from '@/assets/unchecked.svg';
import TodoItem from './todo-item';
interface TodoProps {
  todoList?: Todo[];
}

export default function Todo({todoList}: TodoProps) {
  return (
    <section className="flex flex-col gap-4">
      <Image
        src={'/images/todo.svg'}
        alt="todo title"
        title="todo"
        width={101}
        height={36}
      />
      <ul className="flex flex-col gap-4 items-center justify-start">
        {/* {todoList.map((todo) => (
          <li>
            <Link href={`/items/${todo.id}`}>{todo.name}</Link>
          </li>
        ))} */}
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </ul>
    </section>
  );
}
