// 완료된 할 일 컴포넌트
'use client';

import clsx from 'clsx';
import CheckIcon from '@/assets/check.svg';
import {toggleCheck} from '@/lib/actions';
import type {Todo} from '@/types/Todo';
import Link from 'next/link';

interface DoneItemProps {
  todo: Todo;
  className?: string;
}

export default function DoneItem({todo, className}: DoneItemProps) {
  // 체크 버튼 클릭 시 Todo 완료 상태 토글
  const onClickCheck = async () => {
    await toggleCheck(todo.id, todo.isCompleted);
  };

  return (
    <li
      className={clsx(
        'w-full h-[50px] border-2 border-slate-900 bg-violet-100 rounded-full flex justify-start px-[10px] gap-4 items-center',
        className
      )}
    >
      {/* 완료 상태 토글 버튼 */}
      <button onClick={onClickCheck}>
        <CheckIcon />
      </button>

      {/* Todo 이름, 클릭 시 상세 페이지 이동 */}
      <Link href={`items/${todo.id}`}>
        <p className="line-through">{todo.name}</p>
      </Link>
    </li>
  );
}
