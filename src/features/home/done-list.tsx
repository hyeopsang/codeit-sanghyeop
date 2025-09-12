import Image from 'next/image';
import type {Todo} from '@/types/Todo';
import DoneItem from './done-item';
import EmptyDone from './empty-done';
interface DoneProps {
  doneList?: Todo[];
}
export default function DoneList({doneList = []}: DoneProps) {
  return (
    <section className="flex flex-col gap-4">
      <Image
        src={'/images/done.svg'}
        alt="todo title"
        title="todo"
        width={97}
        height={36}
      />
      {doneList.length === 0 && <EmptyDone />}
      {doneList.length > 0 && (
        <ul className="flex flex-col gap-4 items-center justify-start">
          {doneList.map((todo) => (
            <DoneItem key={todo.id} title="성하 보고싶다" />
          ))}
          <DoneItem title="성하 보고싶다" />
          <DoneItem title="성하 보고싶다" />
          <DoneItem title="성하 보고싶다" />
        </ul>
      )}
    </section>
  );
}
