import Image from 'next/image';
import Link from 'next/link';
import type {Todo} from '@/types/Todo';
import CheckIcon from '@/assets/check.svg';
import DoneItem from './done-item';
interface TodoProps {
  todoList?: Todo[];
}
export default function Done() {
  return (
    <section className="flex flex-col gap-4">
      <Image
        src={'/images/done.svg'}
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
        <DoneItem />
        <DoneItem />
        <DoneItem />
      </ul>
    </section>
  );
}
