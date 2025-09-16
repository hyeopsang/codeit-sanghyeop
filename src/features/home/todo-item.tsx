// 할 일 컴포넌트
'use client';

import UnCheckedIcon from '@/assets/unchecked.svg';
import clsx from 'clsx';
import type {Todo} from '@/types/Todo';
import {toggleCheck} from '@/lib/actions';
import Link from 'next/link';

interface TodoItemProps {
  todo: Todo;
  className?: string;
}

export default function TodoItem({todo, className}: TodoItemProps) {
  // 체크 버튼 클릭 시 완료 상태 토글
  const onClickCheck = async () => {
    await toggleCheck(todo.id, todo.isCompleted);
  };

  return (
    <li
      className={clsx(
        'w-full h-[50px] border-2 border-slate-900 bg-white rounded-full flex justify-start px-[10px] gap-4 items-center',
        className
      )}
    >
      {/* 체크 버튼 */}
      <button type="button" onClick={onClickCheck}>
        <UnCheckedIcon />
      </button>

      {/* Todo 이름, 클릭 시 상세 페이지 이동 */}
      <Link href={`/items/${todo.id}`}>
        <p>{todo.name}</p>
      </Link>
    </li>
  );
}
