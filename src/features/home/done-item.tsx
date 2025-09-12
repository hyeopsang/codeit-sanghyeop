import clsx from 'clsx';
import CheckIcon from '@/assets/check.svg';

interface DoneItemProps {
  title: string;
  className?: string;
}

export default function DoneItem({title, className}: DoneItemProps) {
  return (
    <li
      className={clsx(
        'w-full h-[50px] border-2 border-slate-900 bg-violet-100 rounded-full flex justify-start px-[10px] gap-4 items-center',
        className
      )}
    >
      <CheckIcon />
      <p className="line-through">{title}</p>
    </li>
  );
}
