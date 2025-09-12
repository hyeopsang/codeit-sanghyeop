import UnCheckedIcon from '@/assets/unchecked.svg';

import clsx from 'clsx';

interface TodoItemProps {
  title: string;
  className?: string;
}

export default function TodoItem({title, className}: TodoItemProps) {
  return (
    <li
      className={clsx(
        'w-full h-[50px] border-2 border-slate-900 bg-white rounded-full flex justify-start px-[10px] gap-4 items-center',
        className
      )}
    >
      <UnCheckedIcon />
      <p>{title}</p>
    </li>
  );
}
