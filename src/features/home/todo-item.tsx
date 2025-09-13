import UnCheckedIcon from "@/assets/unchecked.svg";
import { toggleCheck } from "@/api/check";
import clsx from "clsx";
import type { Todo } from "@/types/Todo";

interface TodoItemProps {
  todo: Todo;
  className?: string;
}

export default function TodoItem({ todo, className }: TodoItemProps) {
  const onClickCheck = async () => {
    await toggleCheck(todo.id, todo.isCompleted);
  };
  return (
    <li
      className={clsx(
        "w-full h-[50px] border-2 border-slate-900 bg-white rounded-full flex justify-start px-[10px] gap-4 items-center",
        className
      )}
    >
      <UnCheckedIcon onClick={onClickCheck} />
      <p>{todo.name}</p>
    </li>
  );
}
